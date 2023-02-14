import Image from "next/image"
import { Source_Sans_Pro, Roboto } from "@next/font/google"
import {BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs"

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
    <footer className={`${source.className} bg-[#F8F8F8] pr-32`}>
        <div className="flex justify-between py-24">
            <div>
                <Image src={truck} alt="truck-logo" />
            </div>

            <div>
                <h3 className='text-primaryBlue mb-4 text-[19px] font-bold'>Contact Us</h3>
                <p className="w-56 text-dimGray mb-4">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p className="text-dimGray mb-4">example2020@gmail.com</p>
                <p className="text-dimGray">(904) 443-0343</p>
            </div>

            <div>
                <h3 className="text-primaryBlue font-bold text-[19px] mb-[14px]">More</h3>
                <ul className="text-dimGray">
                    <li className="mb-[14px] cursor-pointer hover:underline">About Us</li>
                    <li className="mb-[14px] cursor-pointer hover:underline">Products</li>
                    <li className="mb-[14px] cursor-pointer hover:underline">Career</li>
                    <li className="cursor-pointer hover:underline">Contact Us</li>
                </ul>
            </div>

            <div className="flex flex-col items-end justify-between">
                <div>
                    <h3 className="text-primaryBlue mb-2 text-[19px]">Social Links</h3>
                    <div className="text-primaryBlue w-24 flex justify-between">
                        <BsInstagram className="cursor-pointer" size={21} />
                        <BsTwitter className="cursor-pointer" size={21} />
                        <BsFacebook className="cursor-pointer" size={21} />
                    </div>
                </div>

                <p className={`${roboto.className} text-[#828B9C]`}>© 2022 Food Truck Example</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer