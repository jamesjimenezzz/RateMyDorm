import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "./Footer";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "@/lib/db/createUsers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dorm Reviews | Your resource for college dorm reviews",
  description: "Your resource for college dorm reviews",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  let user = null;

  if (userId) {
    user = await createUser();
  }

  return (
    <Providers>
      <html className="scroll-smooth" lang="en">
        <body
          className={`${poppins.variable} antialiased flex flex-col min-h-screen   `}
        >
          <Header user={user} />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
