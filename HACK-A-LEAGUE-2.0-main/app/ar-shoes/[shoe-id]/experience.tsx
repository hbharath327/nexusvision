"use client";

import type { TShoeData } from "@types";

import { useEffect, useState } from "react";

import { cn } from "@utlis";
import QRCode from "react-qr-code";
import { pagesMenu } from "@arShoesDetails/config";

export default function Experience({ shoeData } : {
    shoeData: TShoeData;
})
{
    const [ qrCode, setQrCode ] = useState<string>("");
    const [ page, setPage ] = useState<typeof pagesMenu[number]["id"]>(pagesMenu[0].id);

    useEffect(() => {
        setQrCode(`${window.location.origin}/ar`);
    }, []);

    return (
        <div className="flex flex-col items-center justify-between flex-1 w-full gap-4 py-2 px-7">
            <div className="flex items-center justify-center gap-1 p-0.5 border-2 rounded-full border-primary">
                {pagesMenu.map(item => (
                    <p
                        key={item.id}
                        onClick={() => setPage(item.id)}
                        className={cn("flex font-medium text-sm rounded-full bg-transparent text-primary justify-center items-center py-2 px-3.5 cursor-pointer", {
                            "bg-primary text-white": item.id === page
                        })}
                    >
                        {item.title}
                    </p>
                ))}
            </div>

            <div className="flex relative overflow-hidden items-center justify-center flex-1 aspect-[1.82] bg-white shadow-md rounded-2xl border-1 border-neutral-100">
                <iframe
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src={shoeData.model}
                    className={cn("absolute -top-[50px] left-0 h-[calc(100%+100px)] w-full", {
                        "hidden": page !== pagesMenu[0].id
                    })}
                />

                <div
                    className={cn({
                        "hidden": page !== pagesMenu[1].id
                    })}
                >
                    {/* {shoeData.qr} */}

                    <QRCode
                        value={qrCode}
                    />
                </div>
            </div>
        </div>
    );
};