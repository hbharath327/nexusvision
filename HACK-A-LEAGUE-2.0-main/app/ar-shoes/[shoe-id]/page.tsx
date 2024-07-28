import Footer from "@footer";
import Navbar from "@navbar/index";
import Details from "@arShoesDetails/details";
import { shoesData } from "@arShoes/shoesData";
import Experience from "@arShoesDetails/experience";

export default function Page({ params } : {
    params: { "shoe-id": string }
})
{
    const shoeData = shoesData.find(item => item.id === params["shoe-id"])!;

    return (
        <div className="flex flex-col items-center justify-between w-screen h-screen pb-6 bg-[#F5F8FF]">
            <Navbar className="bg-primary" />
            <Details shoeData={shoeData} />
            <Experience shoeData={shoeData} />
            <Footer />
        </div>
    );
};