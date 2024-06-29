import { NextUIProvider } from "@nextui-org/react";
import { Hanken_Grotesk } from "next/font/google";

const HankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export default function OnboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${HankenGrotesk.className}`}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
