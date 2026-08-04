"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, googleProvider, isFirebaseConfigured } from "@/lib/firebase";

const createUserIfNeeded = async (firebaseUser) => {
  const userRef = doc(db, "users", firebaseUser.uid);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    return;
  }

  await setDoc(userRef, {
    email: firebaseUser.email || "",
    createdAt: serverTimestamp(),
    generationsUsed: 0,
  });
};

const getAuthMessage = (error, fallback) => {
  switch (error?.code) {
    case "auth/email-already-in-use":
      return "An account already exists for that email.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Email or password is incorrect.";
    case "auth/weak-password":
      return "Use a password with at least 6 characters.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was closed before it finished.";
    default:
      return error?.message || fallback;
  }
};

export const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsAuthLoading(false);
      setAuthError("Firebase is not configured yet.");
      return undefined;
    }

    return onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        setAuthError("");

        if (firebaseUser) {
          await createUserIfNeeded(firebaseUser);
        }

        setUser(firebaseUser);
      } catch (error) {
        setAuthError(error.message || "Unable to prepare your account.");
        setUser(firebaseUser);
      } finally {
        setIsAuthLoading(false);
      }
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setAuthError("");

    if (!isFirebaseConfigured) {
      setAuthError("Add your Firebase environment variables before signing in.");
      return false;
    }

    try {
      await signInWithPopup(auth, googleProvider);
      return true;
    } catch (error) {
      setAuthError(getAuthMessage(error, "Google sign-in failed."));
      return false;
    }
  }, []);

  const signInWithEmail = useCallback(async (email, password) => {
    setAuthError("");

    if (!isFirebaseConfigured) {
      setAuthError("Add your Firebase environment variables before signing in.");
      return false;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      setAuthError(getAuthMessage(error, "Email sign-in failed."));
      return false;
    }
  }, []);

  const registerWithEmail = useCallback(async (email, password) => {
    setAuthError("");

    if (!isFirebaseConfigured) {
      setAuthError("Add your Firebase environment variables before creating an account.");
      return false;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      setAuthError(getAuthMessage(error, "Account registration failed."));
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
  }, []);

  return {
    user,
    isAuthLoading,
    authError,
    signInWithGoogle,
    signInWithEmail,
    registerWithEmail,
    logout,
  };
};
