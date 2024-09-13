'use client';
import { useState } from "react";
import CourseCodeDropdown from "./CourseCodeDropdown";
import InfoModal from "./InfoModal";
import CreateWorkListModal from "./CreateWorkListModal";
import CourseList from "./CourseList";

const dropDownArrow = <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5822 7.6367C4.87605 7.28646 5.35248 7.28646 5.64633 7.6367L9.62897 12.3836L13.6116 7.6367C13.9055 7.28646 14.3819 7.28646 14.6757 7.6367C14.9696 7.98694 14.9696 8.55479 14.6757 8.90503L10.161 14.2861C9.86719 14.6363 9.39076 14.6363 9.09691 14.2861L4.5822 8.90503C4.28835 8.55479 4.28835 7.98694 4.5822 7.6367Z" fill="black"/>
</svg>


function workListInfoModal() {
    return (
        <div className="flex flex-col pt-6 pb-10 px-6 gap-10 text-center">
            <h1 className="text-[40px] font-semibold">What is this worklist function? &#129299;</h1>
            <p className="text-[30px]">
                This worklist function allows you to save and build a<br/>
                schedule with the courses you are interested in<br/>
                taking.
            </p>
            <p className="text-[30px]">
                Select an existing worklist, or create a new one to<br/>
                get planning!
            </p>
        </div>
    );
}

function workListNotSelectedModal() {
    return (
        <div className="flex flex-col pt-6 pb-10 px-6 gap-10 text-center">
            <h1 className="text-[40px] font-semibold">WAIT! &#9757;&#127995;</h1>
            <p className="text-[30px]">
                Please select an existing worklist, or create a new<br/>
                one to add the course to.
            </p>
        </div>
    );
}

export default function Explore() {
    const [showCCDropdown, setShowCCDropdown] = useState<boolean>(false);
    const [showWLDropdown, setShowWLDropDown] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectInfoModal, setSelectInfoModal] = useState<number>(0);
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [coursesList, setCoursesList] = useState<[]>([]);
    function handleWorklistInfo() { }
    function handleSaveSelection() { }
    function handleCCSelection() {}
    function handleWLSelection() {}
// my-0 mx-auto

    worklist.push()


    return (
        <div className="w-full max-h-screen px-28 py-8">
            <InfoModal showModal={showModal} setShowModal={setShowModal}>
                {selectInfoModal == 0? workListInfoModal() : workListNotSelectedModal()}
            </InfoModal>
            <CreateWorkListModal showCreateModal={showCreateModal}>
                <div className="flex flex-col pt-6 pb-10 px-6 gap-10 items-center text-center">
                    <h1 className="text-[40px] font-semibold">Let's create your first worklist! &#128522;</h1>
                    <input className="py-2 px-3 w-[95%] bg-[#EDF2F7] rounded-lg" placeholder="Enter worklist name"></input>
                    <button className="px-8 py-3 bg-gradient-to-r from-[#3D15DC] to-[#C502F6] text-[20px] text-white font-semibold rounded-xl" onClick={() => setShowCreateModal(!showCreateModal)}>Create Worklist</button>
                </div>
            </CreateWorkListModal>
            <h1 className="py-2 text-[#3500A3] text-[30px] font-semibold">Enter Course Code</h1> {/* Put dropDownArrow inside input box*/}
            <div className="py-2 flex justify-between">
                <div className="flex w-2/5 items-center">
                    <div className="relative pb-2 w-full text-center text-[20px]">
                        <input className={`py-2 px-4 w-full focus:outline-none ${showCCDropdown? "rounded-t-3xl border-t-2 border-x-2 border-[#A0AEC0]": "rounded-full border-2 border-[#A0AEC0]"}`} onFocus={() => setShowCCDropdown(!showCCDropdown)} onBlur={() => setShowCCDropdown(!showCCDropdown)} placeholder="Enter a course code or keyword"></input>
                        {showCCDropdown && <CourseCodeDropdown courseCodes={courseCodes} handleCCSelection={handleCCSelection}></CourseCodeDropdown>}
                    </div>

                    <h3 className="px-3 text-[20px] underline">Filter</h3>
                </div>
                <div className="flex w-auto items-center">
                    <div className="relative pb-2 w-full text-center text-[20px]">
                        <input className={`py-1 px-2 w-full focus:outline-none ${showWLDropdown? "rounded-t-md border-t-2 border-x-2 border-[#A0AEC0]": "rounded-full border-2 border-[#A0AEC0]"}`} onFocus={() => setShowWLDropDown(!showWLDropdown)} onBlur={() => setShowWLDropDown(!showWLDropdown)} placeholder="Select Worklist"></input>
                        {showWLDropdown && <CourseCodeDropdown courseCodes={worklist} handleCCSelection={handleWLSelection}></CourseCodeDropdown>}
                    </div>
                    <button className="px-3 ml-2 mb-2 rounded-full border-4 border-[#A0AEC0] text-[#A0AEC0] text-[20px] font-semibold" onClick={() => {setShowModal(!showModal); setSelectInfoModal(0)}}>i</button>
                </div>
                <div className="pr-4 flex items-center">
                    <button className="w-36 h-2/3 rounded-md bg-[#A0AEC0] text-white">Save</button>
                </div>
            </div>

            <div className="flex justify-between items-stretch lg:text-[30px] md:text-[25px] font-bold border-b-2 border-[#A0AEC0]">
                <h2 className="lg:basis-2/12 md:basis-1/5">Course Code</h2>
                <h2 className="lg:basis-6/12 md:basis-2/5">Course Title</h2>
                <h2 className="lg:basis-2/12 md:basis-1/5 text-right">Requirement</h2>
                <h2 className="lg:basis-1/12 md:basis-1/5 text-right">Credits</h2>
            </div>
            <div className="max-h-[75%] overflow-auto">
                {/* Put in separate component */}
                {courseListTest.map(course => (
                    <CourseList course={course} key={course.id} />
                ))}
                {courseListTest.map(course => (
                    <div className="py-6 flex justify-between items-center text-[20px] font-semibold text-center border-b-2 border-[#A0AEC0]">
                        {/* Courses list View */}
                        <h2 className="basis-2/12">{course.coursecode}</h2>
                        <div className="basis-6/12 flex gap-6 justify-between">
                            <h2 className="text-start pl-1">{course.title}</h2>
                            {/* <button className="pt-3" onClick={courseSectionDropdown}>{downArrow}</button> */}
                        </div>
                        <h2 className="basis-2/12">{course.breath}</h2>
                        <h2 className="basis-1/12">{course.credit}</h2>
                    </div>
                ))}
                <div className="flex justify-between items-center py-4 text-[20px] font-semibold text-center border-b-2 border-[#A0AEC0]">
                    {/* Courses list View */}
                    <h2 className="basis-2/12">CMPT 125</h2>
                    <div className="basis-6/12 flex gap-6 justify-between">
                        <h2 className="text-start pl-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        {/* <button className="pt-3" onClick={courseSectionDropdown}>{downArrow}</button> */}

                    </div>
                    <h2 className="basis-2/12">B-Sci</h2>
                    <h2 className="basis-1/12">3</h2>
                </div>
            </div>
        </div>
    )
}

const courseCodes: string[] = ["CMPT", "CRIM", "ENSC", "ENGR", "ENVIRO", "ARTS", "LAW", "SCI"];

const worklist: string[] = ["Worklist 1", "Worklist 2"];

const courseListTest = [
    {
        coursecode: "CMPT 120",
        title: "Introduction to Computer Science and Programming I",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, illum nobis sapiente reprehenderit provident aliquid repellat fugit et non quo assumenda deserunt minus pariatur qui nostrum dolore nihil alias!",
        breath: "B-Sci",
        credit: 3,
        id: 0
    },
    {
        coursecode: "CMPT 125",
        title: "Introduction to Computer Science and Programming II",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, illum nobis sapiente reprehenderit provident aliquid repellat fugit et non quo assumenda deserunt minus pariatur qui nostrum dolore nihil alias!",
        breath: "B-Sci",
        credit: 3,
        id: 1
    },
    {
        coursecode: "CMPT 225",
        title: "Data Structures and Algorithm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, illum nobis sapiente reprehenderit provident aliquid repellat fugit et non quo assumenda deserunt minus pariatur qui nostrum dolore nihil alias!",
        breath: "Quantitative",
        credit: 3,
        id: 2
    },
    {
        coursecode: "CMPT 300",
        title: "Operating Systems",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, illum nobis sapiente reprehenderit provident aliquid repellat fugit et non quo assumenda deserunt minus pariatur qui nostrum dolore nihil alias!",
        breath: null,
        credit: 3,
        id: 3
    },
    {
        coursecode: "CMPT 310",
        title: "Introduction to AI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia, illum nobis sapiente reprehenderit provident aliquid repellat fugit et non quo assumenda deserunt minus pariatur qui nostrum dolore nihil alias!",
        breath: null,
        credit: 3,
        id: 4
    }
]