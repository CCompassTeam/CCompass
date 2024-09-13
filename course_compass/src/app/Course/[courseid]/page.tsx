"use client";

import { useRouter } from "next/navigation"

const backArrowIcon = <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7777 14.7772H10.9033L17.7355 7.94501L15.9999 6.22168L6.22217 15.9995L15.9999 25.7772L17.7233 24.0539L10.9033 17.2217H25.7777V14.7772Z" fill="black"/>
</svg>


interface Props {
    params: number
}

export default function CourseInfo({params}: Props) {
    const router = useRouter();

    return (
        <div className="w-full px-24 pt-8 bg-gray-200">
            <div className="px-8 py-5 flex justify-between text-[30px] font-bold border-b-2 border-[#A0AEC0]">
                <button className="" onClick={() => router.back()}>{backArrowIcon}</button>
                <h1 className="">CPSC 100: Introduction to Computer Science and Programming I</h1>
                <h2 className="bg-gradient-to-r from-[#3D15DC] via-[#C502F6] to-[#C502F6] inline-block text-transparent bg-clip-text">Section 001</h2>
            </div>
            <div className="py-5 grid grid-cols-2">
                <div className="">
                    <h2 className="text-[30px] font-bold text-[#3500A3] underline underline-offset-8 decoration-[#A0AEC0] decoration-2">Location & Time</h2>
                    <div className="pl-10 pt-6 pb-4 flex flex-col text-[20px]">
                        <p className="font-semibold">Room: <span className="font-normal">TASC 121</span></p>
                        <p className="font-semibold">Delivery & Time: <span className="font-normal">In-person, Monday 12:30pm - 2:30pm</span></p>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[30px] font-bold text-[#3500A3] underline underline-offset-8 decoration-[#A0AEC0] decoration-2">Instructor Information</h2>
                    <p className="pl-12 pt-6 pb-4 text-[20px] underline underline-offset-2">Professor Sarah Lee</p>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-3">
                    <h2 className="text-[30px] font-bold text-[#3500A3] underline underline-offset-8 decoration-[#A0AEC0] decoration-2">Syllabus & Requisites</h2>
                    <button className="text-[20px] font-semibold underline">Download Syllabus (PDF)</button>
                </div>
                <div className="pl-10 py-6 flex flex-col text-[20px]">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue dictum fringilla. Curabitur mauris elit, ultricies nec rutrum eget, ullamcorper id nunc. Nam condimentum semper metus semper tempor. Cras tristique.</p>
                    <br/>
                    <br/>
                    <p className="font-bold">Units: <span className="font-normal">4</span></p>
                    <p className="font-bold">Designation: <span className="font-normal">Writing</span></p>
                    <p className="font-bold">Pre-requisites: <span className="font-normal">ABCXXX</span></p>
                    <p className="font-bold">Co-requisites: <span className="font-normal">ABCXXX</span></p>
                    <p className="font-bold">Post-requisites: <span className="font-normal">ABCXXX</span></p>
                </div>
            </div>
            <div className="">
                <h2 className="text-[30px] font-bold text-[#3500A3] underline underline-offset-8 decoration-[#A0AEC0] decoration-2">Material</h2>
                <div className="pl-10 py-6 flex flex-col text-[20px]">
                    <p className="font-semibold">Textbooks:<span className="font-normal">The world of magic</span></p>
                    <p className="font-semibold">Other stuff: <span className="font-normal">Internet access</span></p>
                </div>
            </div>
            <div className="">
                <h2 className="text-[30px] font-bold text-[#3500A3] underline underline-offset-8 decoration-[#A0AEC0] decoration-2">Labs/Tutorials</h2>
                <div className="pl-10 py-6 flex flex-col text-[20px]">
                    <p>A lab/tutorial section is required</p>
                    <div className="grid grid-cols-1 justify-items-center w-full">
                        <div className="grid grid-cols-3">
                            <h3>Lab/Tutorial</h3>
                            <h3>Day(s)</h3>
                            <h3>Time</h3>
                            <p>L2901</p>
                            <p>Monday</p>
                            <p>3:30pm - 4:30pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}