import type { Metadata } from "next";
import { Roboto, PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  weight: ["700", "400"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Positivus",
  description: "Positivus a digital marketing agency landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${ptSans.variable} antialiased`}
      >
        <main className="px-4 lg:px-10">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
