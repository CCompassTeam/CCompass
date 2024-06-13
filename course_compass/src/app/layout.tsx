import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import {
  NextUIProvider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { BellIcon, UserCircleIcon, CourseCompassLogoIcon } from '@/components/ui/icons';

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
    <html>
      <NextUIProvider>
        <body className={`${HankenGrotesk.className}`}>
          <NavBar />
          {children}
        </body>
      </NextUIProvider>
    </html>
  );
}

function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link>
          <CourseCompassLogoIcon />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link
            isBlock
            color="foreground"
            href="#"
            className="font-medium text-lg"
          >
            EXPLORE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            isBlock
            color="foreground"
            href="#"
            className="font-medium text-lg"
          >
            PLAN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            isBlock
            color="foreground"
            href="#"
            className="font-medium text-lg"
          >
            REVIEWS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <BellIcon />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <UserCircleIcon />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
