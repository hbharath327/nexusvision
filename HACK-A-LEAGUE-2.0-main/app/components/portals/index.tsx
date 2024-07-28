"use client"

import React, { useEffect, useState } from "react";

import { cn } from "@utlis";
import { createPortal } from "react-dom";

export default function Portal({ children, className, show, ...props }: {
	show?: boolean;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>)
{
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true)
	}, []);

	if (!mounted || show === false) {
		return null;
	};

	return createPortal(
		<main
            {...props}
            className={cn(
                "w-full flex justify-center items-center h-full backdrop-blur-[1px] bg-gray-800/50 overflow-hidden antialiased font-poppins absolute top-0 z-[999]",
				className
            )}
        >
            {children}
		</main>,
		document.body as HTMLElement
	);
};