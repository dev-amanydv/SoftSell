import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Smart Digital Product Sales",
  description: "SoftSell helps you sell digital products effortlessly with a secure, fast, and user-friendly experience.",
  keywords: ["SoftSell", "digital product sales", "ecommerce", "sell downloads", "digital marketplace", "Next.js"],
  authors: [{ name: "Aman Yadav", url: "https://github.com/dev-amanydv" }],
  creator: "Aman Yadav",
  publisher: "SoftSell",
  openGraph: {
    title: "SoftSell - Smart Digital Product Sales",
    description: "Sell your digital products with ease using SoftSell.",
    url: "https://softsell.dev",
    siteName: "SoftSell",
    images: [
      {
        url: "https://softsell.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftSell banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Smart Digital Product Sales",
    description: "Sell digital products online with ease and security.",
    creator: "@devamanydv",
    images: ["https://softsell.dev/og-image.png"],
  },
  metadataBase: new URL("https://softsell.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
