import "./globals.css";
import { bricolage } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://kivora.collabtower.com"),
  title: {
    default: "Kivora | AI Kitchen Remodel Visualizer",
    template: "%s | Kivora",
  },
  description:
    "Upload one photo of your kitchen and generate realistic AI remodel concepts in seconds. Compare styles before you spend on your renovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="bg-kivora-cream text-kivora-ink">{children}</body>
    </html>
  );
}
