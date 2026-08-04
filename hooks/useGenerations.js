"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { normalizeGeneration } from "@/lib/kivoraApp";

export const useGenerations = (user) => {
  const [generations, setGenerations] = useState([]);
  const [generationsError, setGenerationsError] = useState("");

  useEffect(() => {
    if (!user) {
      setGenerations([]);
      return undefined;
    }

    const generationsQuery = query(collection(db, "generations"), where("uid", "==", user.uid));

    return onSnapshot(
      generationsQuery,
      (snapshot) => {
        const savedGenerations = snapshot.docs
          .map(normalizeGeneration)
          .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));

        setGenerations(savedGenerations);
        setGenerationsError("");
      },
      (snapshotError) => {
        setGenerationsError(snapshotError.message || "Unable to load saved generations.");
      }
    );
  }, [user]);

  return { generations, generationsError };
};
