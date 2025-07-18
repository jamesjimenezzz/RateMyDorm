import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { getUser } from "@/lib/api/user";
import { auth } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="flex sticky top-0 z-50 bg-white/50 backdrop-blur-lg justify-between items-center border-b px-8 py-4">
      <div className="flex items-center font-semibold gap-5">
        <Link className="hover:underline" href="/">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Contact
        </Link>
      </div>
      <div className="">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            Rate<span className="text-gray-700">MyDorm</span>
          </h1>
        </Link>
      </div>
      <div>
        <SignedOut>
          <SignInButton>
            <Button className="font-semibold" variant={"outline"}>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="items-center flex gap-5">
            {user && user.isStudentEmail && (
              <Badge
                variant="secondary"
                className="bg-blue-500 py-1.5 text-white dark:bg-blue-600 flex items-center gap-2"
              >
                <BadgeCheckIcon />
                Verified Student
              </Badge>
            )}
            {user && user.role === "admin" && (
              <Link href="/admin">
                <Badge className="py-1 px-3 bg-green-500 text-white">
                  Admin Account
                </Badge>
              </Link>
            )}
            {user && !user.isStudentEmail && user.role !== "admin" && (
              <p className="text-sm hover:underline hover:text-gray-500 cursor-pointer text-gray-400">
                Verify now
              </p>
            )}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
