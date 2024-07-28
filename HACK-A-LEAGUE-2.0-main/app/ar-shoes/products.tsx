import { cn } from "@utlis";
import Link from "next/link";
import { labels } from "@labels";
import { ROUTES } from "@routes";
import { shoesData } from "@arShoes/shoesData";
import SolidButton from "@buttons/solidButton";
import { FaTwitter, FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export default function Products()
{
    return (
        <div className="flex items-center justify-start w-full gap-10 pb-8 pl-12 pr-10">
            <div className="flex flex-col items-center justify-center gap-4">
                <FaTwitter />
                <FaInstagram />
                <FaSquareFacebook />
            </div>

            <div className="flex items-center justify-end flex-1 gap-8">
                {shoesData.map(shoe => (
                    <div
                        key={shoe.id}
                        className="relative h-32 overflow-hidden transition-all duration-1000 cursor-pointer w-72 rounded-2xl group hover:scale-110"
                    >
                        <div className={cn("absolute top-0 left-0 flex-1 w-full h-full p-1 transition-all duration-1000 group-hover:w-1/2", shoe.mainClass)}>
                            <img
                                src={shoe.image}
                                alt="shoes"
                                className="object-contain w-full h-full group-hover:-rotate-[35deg] transition-all duration-1000"
                            />
                        </div>

                        <div className="absolute top-0 flex flex-col items-center justify-between w-1/2 h-full gap-2 p-3 transition-all duration-1000 bg-white left-full group-hover:left-1/2">
                            <div className="flex flex-col items-start justify-start w-full gap-0.5">
                                <p className="text-sm font-semibold text-black">
                                    {shoe.name}
                                </p>

                                <div className="flex items-center justify-center gap-1 ">
                                    <img
                                        src="/stars.png"
                                        alt="stars"
                                    />

                                    <div className="w-0.5 rounded-full bg-neutral-300 h-4" />

                                    <p className="text-xs font-medium text-neutral-500">
                                        {shoe.reviewsCount}
                                    </p>
                                </div>

                                <p className="text-xs font-medium text-neutral-500">
                                    {shoe.category}
                                </p>
                            </div>

                           <Link href={ROUTES.SHOE_DETAILS(shoe.id)}>
                                <SolidButton className={cn("text-white border-none", shoe.btnClass)}>
                                    {labels.AR_SHOES_HOME.VIEW_BTN}
                                </SolidButton>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};