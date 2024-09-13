import { useState } from "react";

const downArrowIcon = <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.6875 1L11.0002 11.0002L21.3128 1" stroke="black" stroke-width="2" />
</svg>

const upArrowIcon = <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6255 12L11.3128 1.99984L1.00015 12" stroke="black" stroke-width="2" />
</svg>

const addtoWorkListIcon = <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="14.5" fill="white" stroke="#3500A3" stroke-width="2"/>
<path d="M23 15H17V9H15V15H9V17H15V23H17V17H23V15Z" fill="#3500A3"/>
</svg>

const checkMarkIcon = <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="14.5" fill="#3500A3" stroke="#3500A3" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 11.5L13 23.5L7 17.5L9.25 15.25L13 19L22.75 9.25L25 11.5Z" fill="white"/>
</svg>

interface CourseProps {
    key: number;
    course: {
        coursecode: string | null, 
        title: string, 
        description: string | null, 
        breath: string | null, 
        credit: number, 
        id: number 
    }
}

interface SectionProps {
    key: number;
    sections: {
        sid: number | null,
        professor: string | null,
        dates: string[]
    }
}


function CourseSections({sections}: SectionProps) {
    return (
        <div className="w-full pl-1 py-1 flex justify-between">
            <div className="grid grid-cols-4 justify-items-start w-full">
                <h3>Section 00{sections.sid}</h3>
                <h2>{sections.professor}</h2>
                <div className="flex flex-col col-span-2">
                    {sections.dates.map((date) => (<p className="text-left">{date}</p>))}
                </div>
            </div>
            <button className="" onClick={workListfunction}>{addtoWorkListIcon}</button>
        </div>
    )
}

function workListfunction() {

}

function CourseList({ course }: CourseProps) {
    const [expandDescription, setExpandDescription] = useState<Boolean>(false);

    return (
            <div className="py-6 flex justify-between text-[20px] font-semibold text-center border-b-2 border-[#A0AEC0]">
                {/* Courses list View */}
                <h2 className="basis-2/12">{course.coursecode}</h2>
                <div className="basis-6/12 flex flex-col">
                    <div className="flex gap-6 justify-between">
                        <h2 className="text-start pl-1">{course.title}</h2>
                        <button className="pt-2 pr-1" onClick={() => setExpandDescription(!expandDescription)}>{expandDescription? upArrowIcon: downArrowIcon}</button>
                    </div>
                    <div className={expandDescription? "mt-4": "mt-0"}>
                        {expandDescription && sectionTest.map((section) => <CourseSections sections={section} key={section.sid} />)}
                    </div>
                </div>
                <h2 className="basis-2/12">{course.breath}</h2>
                <h2 className="basis-1/12">{course.credit}</h2>
            </div>
    );
}

export default CourseList;

const sectionTest = [
    {
        sid: 0o1,
        professor: "Sarah Lee",
        dates: ["M/W/F: 2:30pm - 3:30 pm"]
    },
    {
        sid: 0o2,
        professor: "Andy NG",
        dates: [
            "Tue: 2:30pm - 3:30pm",
            "Thur: 2:30pm - 5:30pm"
        ]
    }
]