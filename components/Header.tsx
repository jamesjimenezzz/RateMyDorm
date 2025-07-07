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

const Header = () => {
  return (
    <header className="flex sticky top-0 z-50 bg-white/50 backdrop-blur-lg justify-between items-center border-b px-8 py-4">
      <div>
        <Link href="/">
          <h1 className="font-bold text-2xl">
            Rate<span className="text-gray-700">MyDorm</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center font-semibold gap-5">
        <Link className="hover:underline" href="/">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Contact
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
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
