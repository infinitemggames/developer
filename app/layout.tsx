import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

// Self-hosted at build time, so visitors' browsers never contact Google Fonts.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Nemanja Maslaković – Games",
  description: "Nemanja Maslaković, independent game developer and maker of the puzzle game Square That.",
  // Google Search Console ownership check.
  verification: {
    google: "HH7owNGXd80F6UFMNKkEnQn46hHBpTh9F-RCJOoz_P0",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
