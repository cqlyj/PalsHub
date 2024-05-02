import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientProvider from "./ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palshub",
  description: "Make your video call with palshub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClientProvider>
            <Navbar></Navbar>
            <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
          </ClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
