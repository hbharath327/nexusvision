import { useState } from "react";

import { labels } from "@labels";
import toast from "react-hot-toast";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): [CopiedValue, CopyFn]
{
    const [ copiedText, setCopiedText ] = useState<CopiedValue>(null)

    const copy: CopyFn = async text =>
    {
        if (!navigator?.clipboard) {
            toast.error(labels.OTHERS.CLIPBOARD_NOT_SUPPORTED, { position: "bottom-center" })
            return false
        };

        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            return true
        } catch (error) {
            toast.error(labels.OTHERS.CLIPBOARD_FAILED, { position: "bottom-center" })
            setCopiedText(null)
            return false
        };
    };

    return [
        copiedText,
        copy
    ];
};