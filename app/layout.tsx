import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fachri — Links",
  description:
    "Web Developer & Creator — All my links in one place.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Fachri — Links",
    description: "Web Developer & Creator — All my links in one place.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fachri — Links",
    description: "Web Developer & Creator — All my links in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
