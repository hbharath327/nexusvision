"use client"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function SwitchArrowBtn({ children } : {
    children: React.ReactNode;
})
{
    return (
        <div className="absolute -bottom-[12%] right-[22%] flex items-center justify-center gap-2">
            <FaChevronLeft className="p-1 transition-all rounded-full cursor-pointer text-neutral-300 w-11 h-11 hover:scale-110 hover:text-orange-400" />
            {children}
            <FaChevronRight className="p-1 transition-all rounded-full cursor-pointer text-orange-500/90 w-11 h-11 hover:scale-110 hover:text-orange-400" />
        </div>
    );
};