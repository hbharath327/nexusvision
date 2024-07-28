import Footer from "@footer";
import Tabs from "@arShoes/tab";
import Navbar from "@navbar/index";
import BgLogo from "@arShoes/bgLogo";
import HeroSection from "@arShoes/hero";
import Products from "@arShoes/products";
import ProductDetails from "@arShoes/productDetails";

export default function Page()
{
    return (
        <div className="relative flex flex-col items-center justify-between w-screen h-screen">
            <Navbar />

            <div className="relative flex items-center justify-start w-full pl-32 h-fit">
                <Tabs />
                <HeroSection />
            </div>

            <BgLogo />
            <ProductDetails />

            <Products />

            <Footer />
        </div>
    );
};