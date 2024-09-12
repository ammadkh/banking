import type { Metadata } from "next";

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
    <main>
      <div>sidebar</div>
      {children}
    </main>
  );
}
