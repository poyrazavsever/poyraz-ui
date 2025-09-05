import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI-Kit by poyrazavsever.com",
  description: "A UI kit for poyrazavsever.com. Created with ❤️ by Poyraz Avsever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
