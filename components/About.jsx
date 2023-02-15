import Link from 'next/link'
import Image from 'next/image'
import { Poppins, Open_Sans, Source_Sans_Pro } from '@next/font/google'

import about from "@/public/assets/about.png"

const poppins = Poppins({
    weight: ["600"],
    subsets: ['latin']
})

const source = Source_Sans_Pro({
  weight: ['600'],
  subsets: ['latin']
})

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"]
})

const About = () => {
  return (
    <div id='about' className='py-[140px] md:py-0 md:px-28 md:flex items-center md:mt-64 md:pr-[150px] bg-gradient-to-r from-spaceCadet via-cornflowerBlue to-chineseBlue'>
        <div className='hidden md:flex justify-center md:w-1/2'>
            <Image src={about} alt="meal" />
        </div>

        <div className='text-center md:text-left md:w-1/2 md:pl-12'>
            <h1 className={`${poppins.className} text-primaryBlue text-[26px] md:text-[45px] pb-5`}>About Us</h1>
            <p className={`${openSans.className} text-[11px] md:text-[15px] px-[50px] md:px-0 text-bodyBlack pb-8 md:pb-6`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <Link href="#articles">
              <button className={`${source.className} text-white w-24 md:w-[132px] h-8 md:h-[42px] text-[12px] md:text-[16px] bg-jasper rounded-full hover:bg-[#c42b38] duration-200`}>
                Read More
              </button>
            </Link>
        </div>
    </div>
  )
}

export default About