"use client";

import React, { ComponentProps } from "react";
import { Button as NextUiButton, cn } from "@nextui-org/react";

export default function Button({ children, className, ...props }: ComponentProps<typeof NextUiButton> & {
    children: React.ReactNode;
})
{
    return (
        <NextUiButton
            variant="shadow"
            color="primary"
            className={cn("text-xs min-h-0 h-fit py-3 font-medium tracking-wider rounded-md", className)}
            {...props}
        >
            {children}
        </NextUiButton>
    );
};