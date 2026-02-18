import type { Metadata } from "next";
import { Inter, Agbalumo } from "next/font/google";
import "./globals.css";
import { Toaster } from "poyraz-ui/molecules";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const agbalumo = Agbalumo({
  variable: "--font-secondary",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poyraz Avsever's UI Kit - Poyraz UI - Brutalist React Components",
  description: "Poyraz UI is a brutalist design system built with React, Next.js, Tailwind CSS v4, and Radix UI. It offers a collection of unstyled, accessible components that you can customize to create your own unique designs.",
  icons: "/favicon.ico",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${agbalumo.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
