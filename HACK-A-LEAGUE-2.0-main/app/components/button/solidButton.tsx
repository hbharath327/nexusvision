import React from "react";
import { cn } from "@utlis";

export default function SolidButton({ children, className }: {
    children: React.ReactNode;
    className?: string;
})
{
    return (
        <div className={cn(
            "px-3 py-1.5 overflow-hidden rounded-md text-xs font-medium tracking-wide hover:scale-105 hover:bg-primary hover:text-white transition-all bg-transparent border-1 border-primary-500/90 text-primary-500/90",
            className
        )}>
            {children}
        </div>
    );
};