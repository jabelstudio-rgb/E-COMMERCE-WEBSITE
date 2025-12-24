import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "EthioMarket | Hybrid Commerce + Purchasing Agent",
  description:
    "Shop internal catalog or request global purchases with transparent ETB quotes.",
  openGraph: {
    title: "EthioMarket",
    description: "Hybrid e-commerce and purchasing agent platform.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
