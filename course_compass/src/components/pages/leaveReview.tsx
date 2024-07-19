// src/app/course-history/page.tsx
'use client';
import { Button, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ArrowBackIcon } from '../ui/icons';
import { useCourse } from '@/app/context/CourseContext';

const courses = [
  {
    code: 'CPSC 100 (2023 Fall)',
    instructor: 'Professor Sara Lee',
    review: true,
  },
  { code: 'CPSC 110 (2023 Winter)', instructor: 'Dr. Harry', review: true },
  {
    code: 'CPSC 210 (2021 Winter)',
    instructor: 'Professor Arrvindh',
    review: true,
  },
  {
    code: 'CPSC 295 (2020 Fall)',
    instructor: 'Professor Schmidt',
    review: true,
  },
  {
    code: 'ENGL 100 (2023 Winter)',
    instructor: 'Professor Gomez',
    review: false,
  },
  { code: 'LIT 200 (2023 Fall)', instructor: 'Professor Imamu', review: false },
  {
    code: 'HIST 400 (2022 Winter)',
    instructor: 'Professor Harel',
    review: false,
  },
  {
    code: 'GEOG 290 (2022 Summer)',
    instructor: 'Professor Meslow',
    review: false,
  },
];

export default function CourseHistory() {
  const router = useRouter();
  const { setSelectedCourse } = useCourse();

  const navigateBack = () => {
    router.push('/reviews');
  };

  const handleReviewClick = (course: {
    code: string;
    instructor: string;
    review: boolean;
  }) => {
    setSelectedCourse(course);
    console.log(course.review);

    if (course.review) {
      router.push('/read-review');
    } else {
      router.push('/reviewForm');
    }
  };

  return (
    <div className="p-6 gap-[3rem] flex flex-row ml-6">
      <h1 className="text-3xl font-bold cursor-pointer" onClick={navigateBack}>
        <ArrowBackIcon />
      </h1>
      <div className="w-full">
        <h1 className="text-2xl font-bold border-b-3 ">Course History</h1>
        <table className="w-full text-left">
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b-2">
                <td className="py-4">{`${course.code} - ${course.instructor}`}</td>
                <td className="py-4 text-right">
                  {course.review ? (
                    <Link
                      className="text-black cursor-pointer"
                      underline="always"
                      onClick={() => handleReviewClick(course)}
                    >
                      View Review
                    </Link>
                  ) : (
                    <Button
                      className="bg-gradient-to-r from-gradient-primary-l to-gradient-primary-r text-white"
                      onClick={() => handleReviewClick(course)}
                    >
                      Leave Review
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
