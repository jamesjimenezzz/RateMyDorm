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
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
