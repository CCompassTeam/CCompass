// src/app/course-history/page.tsx
"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "../ui/icons";

const courses = [
  {
    code: "CPSC 100 (2023 Fall)",
    instructor: "Professor Sara Lee",
    review: true,
  },
  { code: "CPSC 110 (2023 Winter)", instructor: "Dr. Harry", review: true },
  {
    code: "CPSC 210 (2021 Winter)",
    instructor: "Professor Arrvindh",
    review: true,
  },
  {
    code: "CPSC 295 (2020 Fall)",
    instructor: "Professor Schmidt",
    review: true,
  },
  {
    code: "ENGL 100 (2023 Winter)",
    instructor: "Professor Gomez",
    review: false,
  },
  { code: "LIT 200 (2023 Fall)", instructor: "Professor Imamu", review: false },
  {
    code: "HIST 400 (2022 Winter)",
    instructor: "Professor Harel",
    review: false,
  },
  {
    code: "GEOG 290 (2022 Summer)",
    instructor: "Professor Meslow",
    review: false,
  },
];

export default function CourseHistory() {
  const router = useRouter();

  const navigateBack = () => {
    router.push("/reviews");
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
                  <Button
                    className="bg-gradient-to-r from-gradient-button-l to-gradient-button-r text-white"
                    onClick={navigateBack}
                  >
                    {course.review ? "Leave Review" : "View Review"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
