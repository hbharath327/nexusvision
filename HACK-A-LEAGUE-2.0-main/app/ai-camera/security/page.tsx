"use client";

import { useEffect, useRef, useState } from "react";
import { useToggle } from "rooks";

import dayjs from "dayjs";
import Footer from "@footer";
import Button from "@button";
import { labels } from "@labels";
import Navbar from "@navbar/index";
import Video from "@aiCameraSecurity/video";
import SetPassword from "@aiCameraSecurity/setPassword";
import EnterPassword from "@aiCameraSecurity/enterPassword";

export default function Page()
{
    const ref = useRef<HTMLVideoElement>(null);
    const [ showModal, toggleModal ] = useToggle();
    const [ isMonitoring, setIsMonitoring ] = useToggle();
    const [ showEnterPassword, setShowEnterPassword ] = useToggle();
    const [ isSecurityThread, setIsSecurityThread ] = useState(false);

    useEffect(() => {
        if (!isSecurityThread) return;
        console.debug("isSecurityThread", isSecurityThread);
    }, [isSecurityThread]);

    useEffect(() => {
        if (!ref.current) return;

        ref.current.addEventListener("ended", () => {
            ref.current!.currentTime = 0;
            ref.current?.play();
        });
    }, [ref]);

    return (
        <div className="flex flex-col items-center justify-between w-screen h-screen pb-8">
            <Navbar>
                <div className="absolute flex flex-col items-center justify-center gap-1 pt-6 font-medium tracking-wider -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <p className="text-xl">
                        {labels.AI_SECURITY.HEADING}
                    </p>
                    <p className="text-xs text-neutral-400">
                        {dayjs().format("MMM D, YYYY - h:mm A")}
                    </p>
                </div>
            </Navbar>

            <div className="flex relative mt-10 mb-5 aspect-[1.5] items-center justify-center flex-1 rounded-3xl overflow-hidden bg-white">
                {isMonitoring &&
                    <video
                        muted
                        autoPlay
                        ref={ref}
                        src="/eye.mp4"
                        className="object-cover w-full h-full"
                    />
                }

                <Video
                    isMonitoring={isMonitoring}
                    setIsMonitoring={setIsMonitoring}
                    setIsSecurityThread={setIsSecurityThread}
                />
            </div>

            {isMonitoring ?
                <Button
                    onClick={setShowEnterPassword}
                    className="px-6 bg-red-600"
                >
                    {labels.AI_SECURITY.STOP_CAMERA_BTN}
                </Button>
            :
                <Button onClick={toggleModal}>
                    {labels.AI_SECURITY.START_BTN}
                </Button>
            }

            <Footer />

            {showModal &&
                <SetPassword
                    toggleModal={toggleModal}
                    setIsMonitoring={setIsMonitoring}
                />
            }

            {showEnterPassword &&
                <EnterPassword
                    setIsMonitoring={setIsMonitoring}
                    setShowEnterPassword={setShowEnterPassword}
                />
            }
        </div>
    );
};