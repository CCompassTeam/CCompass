import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { GradientCourseCompassIcon } from '@/components/ui/icons';

export default function SignUp() {
  // TODO: Change button hover colour to gradient purple
  return (
    <div className="flex flex-col justify-evenly items-center h-screen">
      <section className="flex flex-col justify-center items-center gap-4">
        <GradientCourseCompassIcon />
        <h1 className="flex flex-col items-center text-6xl font-bold p-2">
          Welcome to Course Compass!
        </h1>

        <h2 className="flex flex-col items-center text-3xl p-2">
          Sign up
        </h2>
        <form className="flex flex-col items-left gap-2 w-4/5">
          Email
          <input
            type="email"
            className="w-150 p-2 border border-gray-300 rounded-md"
            required
          />
          Password
          <input
            type="password"
            className="w-150 p-2 border border-gray-300 rounded-md"
            required
          />
          Re-enter password
          <input
            type="password"
            className="w-150 p-2 border border-gray-300 rounded-md"
            required
          />
          <Button className="bg-gradient-to-r from-gradient-button-l to-gradient-button-r font-bold text-white px-8 py-3 w-1/5 justify-center">
            {// TODO: replace link with registration logic
            }
            <Link href="/onboard"> Lets go </Link>
          </Button>
        </form>
      </section>
    </div>
  );
}
