import type { Metadata } from "next";
import { Inter, Agbalumo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/molecules/sonner";

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
  title: "Poyraz UI",
  description: "Modern, Minimalist UI Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${agbalumo.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
