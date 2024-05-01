import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="shadow">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium">
        <Link href="/">New meeting</Link>
        <SignedIn>
          <div className="flex items-center gap-5">
            <Link href="/meetings">Meetings</Link>
            <UserButton></UserButton>
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Navbar;
