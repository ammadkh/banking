import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons: {
    icon: "/public/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
