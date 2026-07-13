import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ollic ICT Academy - Digital Skills Training",
  description:
    "Empower yourself with premium tech skills at Ollic ICT Academy. Learn Frontend, Backend, Full Stack, Mobile App Development, Python, Cloud Computing, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-space">{children}</body>
    </html>
  );
}
