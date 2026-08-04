import RegisterPageClient from "@/components/auth/RegisterPageClient";

export const metadata = {
  title: "Register",
  description:
    "Create a Kivora account to upload your kitchen photo and generate realistic AI remodel previews.",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
