"use client";

import dynamic from "next/dynamic";

const LoginPageClient = dynamic(() => import("@/components/auth/LoginPageClient"), {
  ssr: false,
});
const RegisterPageClient = dynamic(() => import("@/components/auth/RegisterPageClient"), {
  ssr: false,
});

export default function AuthPageClient({ mode }) {
  return mode === "register" ? <RegisterPageClient /> : <LoginPageClient />;
}
