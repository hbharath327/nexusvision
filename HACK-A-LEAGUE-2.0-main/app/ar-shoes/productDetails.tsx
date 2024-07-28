import Link from "next/link";
import { ROUTES } from "@routes";
import { labels } from "@labels";
import SwitchArrowBtn from "@arShoes/switch";
import SolidButton from "@buttons/solidButton";
import { shoesData } from "@arShoes/shoesData";

export default function ProductDetails()
{
    return (
        <div className="absolute top-[5%] right-[10%]">
            <img
                alt="shoes"
                src={shoesData[0].image}
                className="w-[85%] -rotate-[15deg] h-fit object-contain"
            />

            <SwitchArrowBtn>
                <div className="flex flex-col justify-center items-center gap-1.5">
                    <p className="text-xl italic font-bold text-neutral-200">
                        {shoesData[0].name}
                    </p>

                    <div className="flex items-center justify-center gap-1 mb-1">
                        <img
                            alt="stars"
                            src="/stars.png"
                        />

                        <div className="w-0.5 rounded-full bg-neutral-600 h-4" />

                        <p className="text-xs font-medium text-neutral-300">
                        {shoesData[0].reviewsCount}
                        </p>
                    </div>

                    <Link href={ROUTES.SHOE_DETAILS(shoesData[0].id)}>
                        <SolidButton className="text-orange-600 bg-transparent border-orange-600 hover:bg-orange-600">
                            {labels.AR_SHOES_HOME.VIEW_BTN}
                        </SolidButton>
                    </Link>
                </div>
            </SwitchArrowBtn>
        </div>
    );
};