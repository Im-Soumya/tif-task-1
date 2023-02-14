import Image from "next/image";
import { Source_Sans_Pro, Open_Sans } from "@next/font/google";

import truck from "@/public/assets/truck.png";
import sidebar from "@/public/assets/red-side-bar.png";
import pizza from "@/public/assets/pizza-lg.png";

const source = Source_Sans_Pro({
    weight: ["700"],
    subsets: ["latin"],
  });

const openSans = Open_Sans({
    weight: ['600'],
    subsets: ['latin']
})

const Hero = () => {
  return (
    <div className="pt-[580px] pb-[68px] md:pl-20 md:flex md:pt-0">
        <div className="md:flex flex-col items-start md:w-1/2">
            <div className="hidden mt-10 md:flex">
                <Image src={truck} alt="truck" />
            </div>
            <div className={`${source.className} px-12 md:px-0 text-center md:text-left md:pt-24 md:w-[345px]`}>
                <h1 className="text-primaryBlue text-[38px] md:text-[62px] leading-[46px] md:leading-[69px]">Discover the <span className="text-jasper">Best</span> Food and Drinks</h1>
                <p className="text-xs md:text-[16px] text-bodyBlack pt-5 md:pt-6 pb-8 md:pb-10">Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className={`w-[120px] md:w-[190px] h-[40px] md:h-[63px] ${openSans.className} text-[12px] md:text-[18px] font-bold tracking-wider bg-jasper rounded-full hover:bg-[#c42b38] duration-200`}>Explore Now!</button>
            </div>
        </div>

        <div className="">
            <Image src={sidebar} alt="design-vector" className="absolute top-0 right-0 z-10" />
            <Image src={pizza} alt="pizza" className="absolute top-0 right-0"/>
        </div>

        <div>
            <button className={`${source.className} font-[600] absolute top-5 right-5 z-10 w-[88px] h-[31px] md:w-[122px] md:h-[42px] text-[11px] md:text-[16px] border-1 border-white rounded-full text-white hover:bg-[#c42b38] duration-200`}>Get in Touch</button>
        </div>
    </div>
  )
}

export default Hero