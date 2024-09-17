import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  variable: "--font-inria-sans",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Login Page",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
