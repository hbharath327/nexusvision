import Button from "@button";
import Image from "next/image";
import { labels } from "@labels";

export default function HeroSection()
{
    return (
        <div className="flex flex-col items-start justify-center">
            <Image
                src="/nike-logo.png"
                alt="Nike logo"
                width={45}
                height={24}
                className="mb-1.5"
            />

            <p className="text-6xl font-bold leading-[4.0625rem] text-amber-200/90">
                {labels.AR_SHOES_HOME.HEADING_1}
            </p>

            <p className="text-amber-200/90 mb-1.5 text-4xl font-medium leading-9">
                {labels.AR_SHOES_HOME.HEADING_2}
            </p>

            <p className="mb-5 text-sm font-medium leading-9 text-neutral-300">
                {labels.AR_SHOES_HOME.HEADING_3}
                <span className="mx-1.5 font-semibold text-white">
                    {labels.AR_SHOES_HOME.HEADING_4}
                </span>
                {labels.AR_SHOES_HOME.HEADING_5}
            </p>

            <Button
                variant="solid"
                className="bg-orange-600"
            >
                {labels.AR_SHOES_HOME.EXPLORE_BTN}
            </Button>
        </div>
    );
};