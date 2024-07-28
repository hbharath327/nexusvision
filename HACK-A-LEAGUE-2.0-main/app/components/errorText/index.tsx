import { cn } from "@utlis";
import { TiWarning } from "react-icons/ti";

export default function ErrorText({ className, message } : {
    className?: string;
    message: string;
})
{
    return (
        <p className={cn(
            "flex items-start justify-start w-fit gap-2.5 px-3 py-2 text-sm font-medium tracking-wide text-red-600 border-solid rounded-lg bg-red-100/20 border-1 border-red-500/30",
            className
        )}>
            <TiWarning className="w-5 h-5" />

            <span className="flex-1">
                {message}
            </span>
        </p>
    );
};