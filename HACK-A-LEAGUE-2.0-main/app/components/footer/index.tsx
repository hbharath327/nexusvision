import { cn } from "@utlis";
import { labels } from "@labels";

export default function Footer({ theme = "dark", className } : {
    theme?: "light" | "dark";
    className?: string;
})
{
    return (
        <footer className={cn(
            "flex items-center justify-center w-full text-[0.5625rem] absolute bottom-0 left-0",
            {
                "text-neutral-400": theme === "light",
                "text-gray-500": theme === "dark",
            },
            className
        )}>
            {labels.OTHERS.FOOTER}
        </footer>
    );
};