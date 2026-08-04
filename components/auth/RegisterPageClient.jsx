"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ImagePlus, Loader2 } from "lucide-react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

const previewImageUrl =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fm=jpg&ixlib=rb-4.1.0&q=80&w=1600&auto=format&fit=crop";

export default function RegisterPageClient() {
  const router = useRouter();
  const { user, isAuthLoading, authError, signInWithGoogle, registerWithEmail } = useFirebaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isEmailRegistering, setIsEmailRegistering] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace("/create");
    }
  }, [router, user]);

  const handleGoogleRegister = async () => {
    setIsRegistering(true);
    await signInWithGoogle();
    setIsRegistering(false);
  };

  const handleEmailRegister = async (event) => {
    event.preventDefault();
    setFormError("");

    if (!email.trim() || !password || !confirmPassword) {
      setFormError("Enter your email and password.");
      return;
    }

    if (password.length < 6) {
      setFormError("Use a password with at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    setIsEmailRegistering(true);
    await registerWithEmail(email.trim(), password);
    setIsEmailRegistering(false);
  };

  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-xl font-semibold">
          Kivora
        </Link>
        <Link href="/login" className="text-sm font-semibold text-kivora-ink/60 transition-colors hover:text-kivora-ink">
          Log in
        </Link>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-16 px-5 py-12 md:px-8 lg:grid-cols-[minmax(380px,0.52fr)_minmax(0,0.9fr)] lg:items-center">
        <section className="border-t border-kivora-ink/10 pt-8">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">
            Account
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
            Create your Kivora account
          </h1>
          <p className="mt-4 text-base leading-7 text-kivora-ink/65">
            Continue with Google, or use email and password to save your remodel generations.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-kivora-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-kivora-ink/85 disabled:cursor-not-allowed disabled:bg-kivora-ink/50"
            onClick={handleGoogleRegister}
            disabled={isAuthLoading || isRegistering || isEmailRegistering}
          >
            {isRegistering ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Preparing Google
              </>
            ) : (
              <>
                Continue with Google
                <ArrowRight size={17} />
              </>
            )}
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-kivora-ink/10" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-kivora-ink/40">
              Or
            </span>
            <div className="h-px flex-1 bg-kivora-ink/10" />
          </div>

          <form className="space-y-4" onSubmit={handleEmailRegister}>
            <div>
              <label htmlFor="register-email" className="text-sm font-semibold text-kivora-ink">
                Email
              </label>
              <input
                id="register-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 min-h-12 w-full border border-kivora-ink/15 bg-transparent px-4 text-base text-kivora-ink outline-none transition-colors placeholder:text-kivora-ink/35 focus:border-kivora-ink"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="register-password" className="text-sm font-semibold text-kivora-ink">
                Password
              </label>
              <input
                id="register-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 min-h-12 w-full border border-kivora-ink/15 bg-transparent px-4 text-base text-kivora-ink outline-none transition-colors placeholder:text-kivora-ink/35 focus:border-kivora-ink"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="register-confirm-password" className="text-sm font-semibold text-kivora-ink">
                Confirm password
              </label>
              <input
                id="register-confirm-password"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-2 min-h-12 w-full border border-kivora-ink/15 bg-transparent px-4 text-base text-kivora-ink outline-none transition-colors placeholder:text-kivora-ink/35 focus:border-kivora-ink"
                placeholder="Confirm your password"
              />
            </div>

            {formError && (
              <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-kivora-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-kivora-ink/85 disabled:cursor-not-allowed disabled:bg-kivora-ink/50"
              disabled={isAuthLoading || isEmailRegistering || isRegistering}
            >
              {isEmailRegistering ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating account
                </>
              ) : (
                <>
                  Register with email
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </form>

          {authError && (
            <p className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {authError}
            </p>
          )}

          <div className="mt-8 space-y-4 border-t border-kivora-ink/10 pt-6">
            {[
              "Create a workspace for your remodel ideas",
              "Keep generated concepts tied to your account",
              "Move from inspiration to decisions faster",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-medium text-kivora-ink/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-kivora-ink" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-medium text-kivora-ink/60">
            Already have an account?{" "}
            <Link href="/login" className="border-b border-kivora-ink pb-1 text-kivora-ink">
              Log in
            </Link>
          </p>
        </section>

        <section className="border-t border-kivora-ink/10 pt-8">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
            <Image
              src={previewImageUrl}
              alt="Modern kitchen prepared for remodel visualization"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-kivora-ink/35" />
            <div className="relative flex min-h-[420px] flex-col justify-end p-6 text-white md:p-8 lg:min-h-[640px]">
              <p className="mb-5 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <ImagePlus size={14} />
                Remodel from your photo
              </p>
              <h2 className="max-w-2xl text-5xl font-semibold leading-[1.02] md:text-7xl">
                Turn one kitchen image into clear design options.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                Start an account, upload your current kitchen, and generate visual directions before you buy materials or call contractors.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
