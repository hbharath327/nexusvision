import Footer from "@footer";
import Link from "next/link";
import { labels } from "@labels";
import Navbar from "@navbar/index";
import Image from "@aiCamera/image";
import { analytics } from "@aiCamera/config";
import { FaAngleRight } from "react-icons/fa6";
import { TbNavigationFilled } from "react-icons/tb";
import { ROUTES } from "@/config/routes";

export default function Page()
{
    return (
        <div className="flex flex-col items-center justify-between w-screen h-screen">
            <Navbar />

            <div className="relative flex items-center justify-center flex-1 w-full px-10 pb-5">
                <img
                    src="/stars.svg"
                    alt="stars"
                    className="absolute opacity-80 top-[10%] z-20 -left-3"
                />

                <div className="flex flex-col items-start justify-center w-1/2 h-full">
                    <p className="flex gap-0.5 text-xs font-medium tracking-wider justify-center items-center p-1.5 rounded-full border-1 border-gray-700/70 py-1.5 px-3.5 bg-slate-800/60 shadow-sm shadow-black/25">
                        <span className="text-primary-500">
                            AIML
                        </span>

                        <span className="h-4 bg-neutral-500 w-[1.5px] mx-1" />

                        <span className="text-yellow-500">
                            TenserFlow.js
                        </span>

                        <span className="h-4 bg-neutral-500 w-[1.5px] mx-1" />

                        <span className="text-green-500">
                            Coco-Ssd
                        </span>
                    </p>

                    <p className="font-bold mt-5 relative leading-[3.3rem] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#FF0076] via-[#590FB7] to-[#003CC5]">
                        <span className="absolute -bottom-[5rem] right-0 px-3.5 py-2 text-xs font-medium text-neutral-200 tracking-wider rounded-md bg-sky-600/85">
                            {labels.AI_CAMERA.REALITY_CHECK}
                            <TbNavigationFilled className="w-5 text-sky-600/85 h-5 absolute -top-4 -left-3.5 -rotate-[45deg]" />
                        </span>

                        {labels.AI_CAMERA.HEADING_1}

                        <span className="ml-2.5 text-indigo-100">
                            {labels.AI_CAMERA.HEADING_2}
                        </span>

                        <span className="text-indigo-100">
                            <br /> {labels.AI_CAMERA.HEADING_3}
                        </span>

                        <span className="text-indigo-100">
                            <br /> {labels.AI_CAMERA.HEADING_4}
                        </span>
                    </p>

                    <p className="w-1/2 mt-6 text-sm tracking-wide text-neutral-400">
                        {labels.AI_CAMERA.DESCRIPTION}
                    </p>

                    <Link
                        href={ROUTES.AR_CAMERA_SECURITY}
                        className="flex items-center justify-center gap-3 px-5 py-3 text-xs font-medium tracking-wider transition-all rounded-md hover:scale-105 hover:bg-primary/85 bg-primary mt-9 h-fit"
                    >
                        {labels.AI_CAMERA.GET_STARTED}
                        <FaAngleRight />
                    </Link>

                    <div className="flex items-start justify-between w-full mt-12">
                        {analytics.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start justify-between flex-1 gap-3 pr-2 pr-20"
                            >
                                <p className="text-4xl font-medium text-blue-500/85">
                                    {item.value}
                                </p>
                                <p className="text-xs tracking-wider text-neutral-400">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <Image />
            </div>

            <Footer />
        </div>
    );
};