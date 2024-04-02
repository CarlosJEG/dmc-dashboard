import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar";
import { cn } from "@/lib/utils";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "D-MC",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "flex")}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
