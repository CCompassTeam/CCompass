// src/app/reviews/page.tsx

'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
} from '@nextui-org/react';
import { ChevronDownIcon } from '@/components/ui/icons';
import { Key } from 'react';

interface Course {
  code: string;
  title: string;
}

const courses: Course[] = [
  {
    code: 'CPSC 100',
    title: 'Introduction to Computer Science and Programming I',
  },
  {
    code: 'CPSC 110',
    title: 'Introduction to Computer Science and Programming II',
  },
  { code: 'CPSC 121', title: 'Introduction to Discrete Mathematics' },
  { code: 'CPSC 210', title: 'Object Oriented Design in Java' },
  { code: 'CPSC 220', title: 'Introduction to the C programming language' },
];

export default function Reviews() {
  const [searchType, setSearchType] = useState<string>('Course');
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectCourse = (code: string) => {
    const course = courses.find((course) => course.code === code);
    if (course) {
      setSelectedCourse(course);
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigateToLeaveReview = () => {
    router.push('/reviewHistory');
  };

  return (
    <div className='text-xl p-6 items-start gap-4 mt-[5rem] ml-[2rem]'>
      <div className='gap-[2rem] flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center' ref={searchRef}>
            <p className='text-xl font-bold mr-2'>Search for a:</p>
            <Button
              onClick={() => setSearchType('Course')}
              color={searchType === 'Course' ? 'primary' : 'default'}
            >
              Course
            </Button>
            <Button
              onClick={() => setSearchType('Instructor')}
              color={searchType === 'Instructor' ? 'primary' : 'default'}
            >
              Instructor
            </Button>
          </div>
          <div>
            <Button
              className='bg-gradient-to-r from-gradient-button-l to-gradient-button-r font-bold text-white px-8 py-3'
              onClick={navigateToLeaveReview}
            >
              Leave a Review
            </Button>
          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <Dropdown>
            <div className='flex flex-row items-center'>
              <Input
                value={searchText}
                placeholder='Enter a course code or keyword'
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
                onClick={handleToggleDropdown}
              />
              <div
                style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'none',
                }}
              >
                <ChevronDownIcon />
              </div>
            </div>

            {isDropdownOpen && (
              <DropdownMenu
                aria-label='Single selection actions'
                selectionMode='single'
                onAction={(key: Key) => handleSelectCourse(key as string)}
              >
                {courses.map((course) => (
                  <DropdownItem key={course.code}>{course.code}</DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </Dropdown>
          <p className='hover:cursor-pointer hover:text-gray-500 underline'>
            Filter
          </p>
        </div>
      </div>
      <table className='mt-8 w-full max-w-4xl text-left'>
        <thead>
          <tr className='border-b-3 text-3xl font-bold'>
            <th className='p-2'>Course Code</th>
            <th className='p-2'>Course Title</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.code} className='border-b-2 w-full cursor-pointer'>
              <td className='p-2 pl-3 pt-[2rem] pb-[2rem]'>{course.code}</td>
              <td className='p-2 pl-3 pt-[2rem] pb-[2rem]'>{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
