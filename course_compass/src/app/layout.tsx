import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import NavBar from '../components/NavBar';

const HankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CourseCompass',
  description:
    'With CourseCompass, you can plan out your personalized degree in 10 minutes with the help of AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${HankenGrotesk.className}`}>
          <NavBar />
          {children}
        </body>
      </NextUIProvider>
    </html>
  );
}
