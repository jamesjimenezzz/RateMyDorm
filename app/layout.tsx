import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dorm Reviews | Your resource for college dorm reviews",
  description: "Your resource for college dorm reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html className="scroll-smooth" lang="en">
        <body
          className={`${poppins.variable} antialiased flex flex-col min-h-screen   `}
        >
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
