import Image from 'next/image'
import { Poppins } from '@next/font/google'

import about from "@/public/assets/about.png"

const poppins = Poppins({
    weight: ["600"],
    subsets: ['latin']
})

const About = () => {
  return (
    <div className='flex items-center mt-48 px-[205px] bg-gradient from-[#1E2A5D] via-[#303E82] to-[#3C509D]'>
        <div className='w-1/2'>
            <Image src={about} alt="meal" />
        </div>

        <div className='w-1/2 pl-24'>
            <h1 className={`${poppins.className} text-primaryBlue text-[45px] pb-6`}>About Us</h1>
            <p className='text-bodyBlack pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button className='w-[132px] h-[42px] bg-jasper rounded-full'>Read More</button>
        </div>
    </div>
  )
}

export default About