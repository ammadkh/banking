import type { Metadata } from "next";
import Image from "next/image";

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
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.svg"
            width={500}
            height={500}
            alt="auth"
          />
        </div>
      </div>
    </main>
  );
}
