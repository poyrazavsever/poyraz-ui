import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme/theme-provider";
import ActivityBar from "../components/layout/activitybar";
import Sidebar from "../components/layout/sidebar";

export const metadata: Metadata = {
  title: "UI-Kit by poyrazavsever.com",
  description:
    "A UI kit for poyrazavsever.com. Created with ❤️ by Poyraz Avsever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-(--color-background) text-(--color-text) transition-colors duration-300">
        <ThemeProvider>
          <ActivityBar />
          <Sidebar />
          <main className="min-h-screen pl-0 sm:pl-[calc(56px+1rem+256px)] pb-20 sm:pb-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
