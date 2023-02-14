import Image from 'next/image'
import { Poppins, Source_Sans_Pro } from '@next/font/google'

import about from "@/public/assets/about.png"

const poppins = Poppins({
    weight: ["600"],
    subsets: ['latin']
})

const source = Source_Sans_Pro({
  weight: ['600'],
  subsets: ['latin']
})

const About = () => {
  return (
    <div className='flex items-center mt-48 pl-[93px] pr-[150px] bg-gradient-to-r from-spaceCadet via-cornflowerBlue to-chineseBlue'>
        <div className='w-1/2'>
            <Image src={about} alt="meal" />
        </div>

        <div className='w-1/2 pl-12'>
            <h1 className={`${poppins.className} text-primaryBlue text-[45px] pb-6`}>About Us</h1>
            <p className='text-bodyBlack pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button className={`${source.className} w-[132px] h-[42px] bg-jasper rounded-full hover:bg-[#c42b38] duration-200`}>Read More</button>
        </div>
    </div>
  )
}

export default About