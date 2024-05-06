import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/palshub_logo.png";

const Navbar = () => {
  return (
    <header className="shadow">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium">
        <div className="flex min-w-[180px] flex-row items-center justify-between gap-2 p-3">
          <Image src={logo} alt="logo" width={40} height={40}></Image>
          <Link href="/">New meeting</Link>
        </div>
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
