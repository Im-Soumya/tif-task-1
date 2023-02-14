import Link from "next/link"
import Image from "next/image"
import { Source_Sans_Pro, Roboto } from "@next/font/google"
import {BsInstagram, BsTwitter,} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"

import truck from "@/public/assets/truck.png"

const source = Source_Sans_Pro({
    weight: ['600'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className={`${source.className} bg-[#F8F8F8] px-10 md:px-28`}>
        <div className="flex flex-col md:flex-row justify-between py-16 md:py-24">
            {/* LOGO */}
            <div className="mb-10 flex flex-row justify-center md:flex-col md:justify-start">
                <Image src={truck} alt="truck-logo" />
            </div>
            
            {/* CONTACT US */}
            <div className="mb-7 md:mb-0">
                <h3 className='text-primaryBlue mb-4 text-[16px] md:text-[19px] font-bold'>Contact Us</h3>
                <p className="w-full md:w-56 text-dimGray text-[10px] md:text-[15px] mb-4">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p className="text-dimGray text-[10px] md:text-[15px] mb-4">example2020@gmail.com</p>
                <p className="text-dimGray text-[10px] md:text-[15px]">(904) 443-0343</p>
            </div>

            {/* MORE */}
            <div className="mb-7 md:mb-0">
                <h3 className="text-primaryBlue font-bold text-[16px] md:text-[19px] mb-[14px]">More</h3>
                <ul className="text-dimGray text-[10px] md:text-[15px]">
                    <li className="mb-2 md:mb-[14px]">
                        <Link href="#about" className="cursor-pointer hover:underline">About Us</Link>
                    </li>
                    <li className="mb-2 md:mb-[14px]">
                        <Link href="#articles" className="cursor-pointer hover:underline">Products</Link>
                    </li>
                    <li className="mb-2 md:mb-[14px] cursor-pointer hover:underline">Career</li>
                    <li className="cursor-pointer hover:underline">Contact Us</li>
                </ul>
            </div>

            {/* SOCIAL LINKS DESKTOP */}
            <div className="hidden lg:flex flex-col items-start md:items-end justify-between">
                <div>
                    <h3 className="text-primaryBlue mb-2 text-[19px]">Social Links</h3>
                    <div className="text-primaryBlue w-24 flex justify-between">
                        <BsInstagram className="cursor-pointer" size={21} />
                        <BsTwitter className="cursor-pointer" size={21} />
                        <FaFacebookF className="cursor-pointer" size={21} />
                    </div>
                </div>

                <p className={`${roboto.className} text-[#828B9C]`}>© 2022 Food Truck Example</p>
            </div>

            {/* SOCIAL LINKS MOBILE */}
            <div className="flex flex-col items-center lg:hidden">
                <p className={`${roboto.className} text-[10px] text-[#828B9C] mb-3`}>© 2022 Food Truck Example</p>
                
                <div className="text-primaryBlue w-24 flex justify-between">
                    <BsInstagram className="cursor-pointer" size={12} />
                    <BsTwitter className="cursor-pointer" size={12} />
                    <FaFacebookF className="cursor-pointer" size={12} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer