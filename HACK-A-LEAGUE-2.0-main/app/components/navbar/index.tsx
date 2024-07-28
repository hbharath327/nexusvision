import { cn } from "@utlis";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@routes";
import UserProfile from "@userProfile/index";

export default function Navbar({ children, className } : {
    children?: React.ReactNode;
    className?: string;
})
{
    return (
        <div className={cn("flex relative items-center justify-between w-full py-2 px-7", className)}>
            <Link
                href={ROUTES.HOME}
            >
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={105}
                    height={25}
                />
            </Link>

            {children}

            <UserProfile />
        </div>
    );
};