import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "./_providers/SessionProviderWrapper";

const lato = Lato({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Morteza Rostami",
  description: "Web programmer & enthusiast. With focus on javascript/typescript and react/next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <SessionProviderWrapper>
        {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
