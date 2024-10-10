import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Augen Replicate",
  description: "Replicating the Augen.pro UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font scroll-smooth"
      >
        {children}
      </body>
    </html>
  );
}
