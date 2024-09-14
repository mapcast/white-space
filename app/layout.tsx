import type { Metadata } from "next";
import { Indie_Flower, Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/src/context/AuthContext";

const basicFont = Indie_Flower({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{width: '100%', height: '100%'}}>
      <body className={basicFont.className} style={{width: '100%', height: '100%'}}>
        <AuthContext>
          <div className="main-wrapper">
            <div className="main">{children}</div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
