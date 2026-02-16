import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-var",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest-var",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azamaza — Marketplace of Verified Services",
  description:
    "Marketplace of verified services and wholesale offers — travel, shop, and save!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${onest.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
