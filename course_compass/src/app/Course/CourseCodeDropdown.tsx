// Assuming the data will have similar schema
interface OptionsProps {
    courseCodes: string[]
    handleCCSelection: Function
}

// This will create the datalist
function CourseCodeDropdown({ courseCodes, handleCCSelection }: OptionsProps) {
    return (
        <ul className={`absolute max-h-24 md:max-h-48 z-10 w-full overscroll-contain overflow-auto bg-white rounded-x-2xl rounded-b-3xl border-x-2 border-b-2 border-[#A0AEC0]`}>
            {courseCodes.map((data:string) => (
                <li className="py-1" key={data}>
                    <button type="button" onClick={() => handleCCSelection(data)} className="" id="menu-item-0">
                        {data}
                    </button>
                </li>
            ))}
        </ul>
    )

}

export default CourseCodeDropdown;