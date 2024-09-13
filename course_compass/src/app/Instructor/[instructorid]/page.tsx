"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"

const backArrowIcon = <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7777 14.7772H10.9033L17.7355 7.94501L15.9999 6.22168L6.22217 15.9995L15.9999 25.7772L17.7233 24.0539L10.9033 17.2217H25.7777V14.7772Z" fill="black"/>
</svg>

const placeholder = <svg width="315" height="375" viewBox="0 0 315 375" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="315" height="375" fill="#E8E8E8"/>
</svg>


interface Props {
    params: number
}

export default function InstructorInfo({params}: Props) {
    const router = useRouter();

    return (
        <div className="flex px-16 pt-10">
            <div className="pt-2">
                <button className="" onClick={() => router.back()}>{backArrowIcon}</button>
            </div>
            <div className="w-full mx-8 pb-5 bg-gray-200 border-b-2 border-[#A0AEC0]">
                <h1 className="text-[30px] font-bold">Dr. Sara Lee</h1>
            </div>
            <div className="flex">
                <Image src={placeholder} width={100} height={100} />
                <div className="">
                    
                </div>
            </div>
        </div>
    )
}