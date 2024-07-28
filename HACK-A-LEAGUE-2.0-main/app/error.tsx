"use client"

import { useEffect } from "react";

import { labels } from "@labels";
import { Button } from "@nextui-org/react";

export default function Error({ error, reset }: {
    reset: () => void;
    error: Error & { digest?: string };
})
{
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 p-8 font-semibold text-center text-6xl px-9 font-dmSans bg-[#020817]">
			<p className="text-white">
				{labels.ERROR_BOUNDARY.HEADING}
			</p>

			<p className="w-full max-w-xl mt-4 text-lg font-medium leading-6 text-gray-500">
				{labels.ERROR_BOUNDARY.DESCRIPTION}
			</p>


			<Button
				onClick={reset}
                color="primary"
                variant="bordered"
                className="py-3 mt-12 text-lg font-medium tracking-wider rounded-lg text-neutral-50 px-9"
			>
				{labels.ERROR_BOUNDARY.BTN}
			</Button>
		</div>
    )
};