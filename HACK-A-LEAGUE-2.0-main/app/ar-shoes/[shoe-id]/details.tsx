import type { TShoeData } from "@types";

import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@routes";
import { IoChevronBack } from "react-icons/io5";

export default function Details({ shoeData } : {
    shoeData: TShoeData;
})
{
    return (
        <div className="flex items-start justify-between w-full py-5 gap-28 px-7">
            <div className="flex flex-1 flex-col justify-start items-start gap-2.5 h-gull">
                <div className="flex items-center justify-center gap-1 text-black">
                    <Link href={ROUTES.SHOE_HOME}>
                        <IoChevronBack className="w-6 h-6 p-0.5 rounded-full cursor-pointer hover:text-primary hover:scale-125 transition-all" />
                    </Link>

                    <p className="text-xl font-semibold tracking-wider">
                        {shoeData.name}
                    </p>
                </div>

                <p className="text-sm text-neutral-500">
                    {shoeData.description}
                </p>
            </div>

            <Image
                src="/video.png"
                alt="video"
                width={334}
                height={197}
                className="transition-all cursor-pointer hover:scale-105 rounded-xl"
            />
        </div>
    );
};