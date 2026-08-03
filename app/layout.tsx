import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APM Tutoring | Affordable Math Tutoring",
  description: "Affordable, personalized elementary, middle, and high school math tutoring from qualified college students and professionals.",
  openGraph: {
    title: "APM Tutoring | Affordable Math Tutoring",
    description: "Build confidence and stronger math skills with affordable tutoring for elementary through high school students.",
    type: "website",
    siteName: "APM Tutoring",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
