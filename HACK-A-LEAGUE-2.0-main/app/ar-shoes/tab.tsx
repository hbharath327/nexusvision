import { labels } from "@labels";

export default function Tabs()
{
    return (
        <div className="absolute flex items-center justify-center text-sm font-medium -rotate-90 -left-24 gap-x-6">
            <p className="transition-all cursor-pointer hover:scale-110 hover:text-orange-500/75">
                {labels.AR_SHOES_HOME.FAQS}
            </p>
            <p className="text-orange-500 cursor-pointer">
                {labels.AR_SHOES_HOME.AR}
            </p>
            <p className="transition-all cursor-pointer hover:scale-110 hover:text-orange-500/75">
                {labels.AR_SHOES_HOME.VIEWER_3D}
            </p>
        </div>
    );
};