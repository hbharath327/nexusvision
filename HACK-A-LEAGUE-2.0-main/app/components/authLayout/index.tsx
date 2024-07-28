import { cn } from "@utlis";
import { labels } from "@labels";
import Portal from "@portals/index";

export default function AuthLayout({ children, className } : {
    children: React.ReactNode;
    className?: string;
})
{
    return (
        <Portal className="relative bg-none">
            <img
                src="/auth-bg.jpg"
                alt="AI Human"
                className="object-cover w-full h-full top-0 left-0 absolute z-[-1] filter blur-sm brightness-50"
            />

            <div className={cn(
                "flex items-center overflow-hidden justify-center bg-[#1f2c64aa] gap-4 w-fit max-w-[75%] min-w-[50rem] h-[72%] shadow-md border-1 backdrop-blur-md border-neutral-700 rounded-2xl",
                className
            )}>
                <div className="relative flex-1 h-full">
                    <img
                        src="/ai-human.png"
                        alt="AI Human"
                        className="object-contain h-full"
                    />

                    <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full gap-2 px-3 py-5">
                        <p className="text-3xl font-semibold text-white">
                            {labels.AUTH.HEADING_1}
                            <br />
                            {labels.AUTH.HEADING_2}
                        </p>

                        <p className="font-medium text-md text-neutral-300">
                            {labels.AUTH.HEADING_3}
                        </p>
                    </div>
                </div>

                {children}
            </div>
        </Portal>
    );
};