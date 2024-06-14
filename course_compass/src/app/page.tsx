import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { GradientIcon } from '@/components/ui/icons';

const footerItems = [
  {
    title: 'ACCESS REVIEWS',
    description:
      'Gain access to comprehensive course and professor reviews to inform your decisions.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#gradient1)"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      />
    ),
  },
  {
    title: 'EXPLORE COURSES',
    description:
      'Explore a wide range of course offerings scheduled for upcoming semesters.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#gradient1)"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    ),
  },
  {
    title: 'PLAN YOUR DEGREE',
    description:
      'Easily plan your personalized degree trajectory with the assistance of AI.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#gradient1)"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen">
      <section className="flex flex-col justify-center items-center gap-4">
        <h1 className="flex flex-col items-center text-6xl font-extrabold ">
          Degree Planning
          {' '}
          <span className="bg-gradient-to-r from-gradient-text-l to-gradient-text-r bg-clip-text text-transparent">
            Meets AI.
          </span>
        </h1>
        <p className="flex flex-col items-center font-medium leading-tight">
          With CourseCompass, you can plan out your
          {' '}
          <span>personalized degree in 10 minutes with the help of AI.</span>
        </p>
        <Button className="bg-gradient-to-r from-gradient-button-l to-gradient-button-r font-bold text-white px-8 py-3">
          <Link href="/auth"> Get started</Link>
        </Button>
      </section>

      <footer className="flex w-full justify-evenly pt-20 rounded-t-[50%] bg-gradient-to-b from-gradient-background-t via-gradient-background-m to-white">
        {footerItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center gap-4"
          >
            <GradientIcon path={item.icon} />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="w-60 leading-tight">{item.description}</p>
          </div>
        ))}
      </footer>
    </div>
  );
}
