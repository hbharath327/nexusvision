"use client";

import { labels } from "@labels";
import Portal from "@portals/index";
import { Button } from "@nextui-org/react";
import { TiWarning } from "react-icons/ti";

export default function EnterPassword({ setIsMonitoring, setShowEnterPassword } : {
    setIsMonitoring: () => void;
    setShowEnterPassword: () => void;
})
{
    return (
        <Portal>
            <div className="flex flex-col items-center justify-between w-3/4 max-w-xl px-6 py-6 bg-white shadow-2xl rounded-3xl">
                <p className="text-2xl font-semibold text-primary">
                    {labels.AI_SECURITY.ENTER_PASS}
                </p>

                <input
                    type="text"
                    placeholder={labels.AI_SECURITY.ENTER_PASS_PLACEHOLDER}
                    className="w-full px-4 py-2 mt-3.5 text-sm text-black bg-transparent rounded-md bg-neutral-100 border-1 border-neutral-300 focus:outline-none focus:border-primary"
                />

                {false &&
                    <p className="flex mt-6 items-start justify-start w-fit gap-2.5 px-3 py-2 text-sm font-medium tracking-wide text-red-600 border-solid rounded-lg bg-red-100/20 border-1 border-red-500/30">
                        <TiWarning className="w-5 h-5" />

                        <span className="flex-1">
                            {labels.AI_SECURITY.INVALID_PASS}
                        </span>
                    </p>

                }
                <div className="flex items-center justify-center w-full gap-6 mt-10">
                    <Button
                        radius="sm"
                        type="submit"
                        color="primary"
                        onClick={setShowEnterPassword}
                        variant="bordered"
                        className="px-10 py-[1.35rem] font-semibold tracking-wider"
                    >
                        {labels.AI_SECURITY.CANCEL_BTN}
                    </Button>

                    <Button
                        radius="sm"
                        type="submit"
                        variant="shadow"
                        className="px-12 py-6 font-semibold tracking-wider text-white bg-red-600"
                        onClick={() => {
                            setShowEnterPassword();
                            setIsMonitoring();
                        }}
                    >
                        {labels.AI_SECURITY.STOP_CAMERA_BTN}
                    </Button>
                </div>
            </div>
        </Portal>
    );
};