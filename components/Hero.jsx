import Image from "next/image";
import { Source_Sans_Pro, Open_Sans } from "@next/font/google";

import truck from "@/public/assets/truck.png";
import sidebar from "@/public/assets/red-side-bar.png";
import pizza from "@/public/assets/pizza-lg.png";

const source = Source_Sans_Pro({
    weight: ["600","700"],
    subsets: ["latin"],
  });

const openSans = Open_Sans({
    weight: ['300','600'],
    subsets: ['latin']
})

const Hero = () => {
  return (
    <div className="flex pl-24">
        <div className="flex flex-col items-start w-1/2">
            <div className="mt-10">
                <Image src={truck} alt="truck" />
            </div>
            <div className={`${source.className} pt-24 w-[345px]`}>
                <h1 className="text-primaryBlue text-[62px] leading-[69px]">Discover the <span className="text-jasper">Best</span> Food and Drinks</h1>
                <p className="text-bodyBlack font-[300] pt-6 pb-10">Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className={`w-[190px] h-[63px] ${openSans.className} font-bold tracking-wider bg-jasper rounded-full`}>Explore Now!</button>
            </div>
        </div>

        <div>
            <Image src={sidebar} alt="design-vector" className="absolute top-0 right-0" />
            <Image src={pizza} alt="pizza" />
        </div>

        <div>
            <button className={`${source.className} font-[600] absolute top-5 right-5 w-[122px] h-[42px] border-1 border-white rounded-full text-white`}>Get in Touch</button>
        </div>
    </div>
  )
}

export default Hero