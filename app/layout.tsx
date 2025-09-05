import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI-Kit by poyrazavsever.com",
  description:
    "A UI kit for poyrazavsever.com. Created with ❤️ by Poyraz Avsever.",
};

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
