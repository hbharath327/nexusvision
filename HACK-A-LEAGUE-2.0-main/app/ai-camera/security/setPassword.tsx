"use client";

import { labels } from "@labels";
import Portal from "@portals/index";
import { Button } from "@nextui-org/react";

export default function SetPassword({ toggleModal, setIsMonitoring } : {
    toggleModal: () => void;
    setIsMonitoring: () => void;
})
{
    return (
        <Portal>
            <div className="flex flex-col items-center justify-between w-3/4 max-w-xl px-6 py-6 bg-white shadow-2xl rounded-3xl">
                <p className="text-2xl font-semibold text-primary">
                    {labels.AI_SECURITY.SET_PASSWORD}
                </p>

                <input
                    type="text"
                    placeholder={labels.AI_SECURITY.SET_PASS_PLACEHOLDER}
                    className="w-full px-4 py-2 mt-3.5 text-sm text-black bg-transparent rounded-md bg-neutral-100 border-1 border-neutral-300 focus:outline-none focus:border-primary"
                />

                <div className="flex items-center justify-center w-full gap-6 mt-10">
                    <Button
                        radius="sm"
                        type="submit"
                        color="primary"
                        onClick={toggleModal}
                        variant="bordered"
                        className="px-10 py-[1.35rem] font-semibold tracking-wider"
                    >
                        {labels.AI_SECURITY.CANCEL_BTN}
                    </Button>

                    <Button
                        radius="sm"
                        type="submit"
                        variant="shadow"
                        className="px-12 py-6 font-semibold tracking-wider text-white bg-primary"
                        onClick={() => {
                            toggleModal();
                            setIsMonitoring();
                        }}
                    >
                        {labels.AI_SECURITY.START_BTN}
                    </Button>
                </div>
            </div>
        </Portal>
    );
};