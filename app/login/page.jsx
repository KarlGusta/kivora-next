import AuthPageClient from "@/components/auth/AuthPageClient";

export const metadata = {
  title: "Login",
  description:
    "Log in to Kivora to upload your kitchen photo and generate realistic AI remodel previews.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <AuthPageClient mode="login" />;
}
