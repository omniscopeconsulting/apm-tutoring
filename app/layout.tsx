import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "APM Tutoring | Math, English and Reading Tutoring", template: "%s | APM Tutoring" },
  description: "Affordable remote Math, English, and Reading tutoring for elementary, middle, and high school students. Group sessions are $10 and one-on-one sessions are $20.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
