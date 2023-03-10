import Image from "next/image"
import { useEffect, useState } from "react"
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { Source_Sans_Pro, Poppins } from "@next/font/google"

import { data } from "@/utils/data"

const source = Source_Sans_Pro({
    weight: ['700'],
    subsets: ['latin']
})

const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin']
})

const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    
    const articlesPerPage = 3

    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    // Adjusting the data based on the current page
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle)

    // Moving to the next page
    const paginateNext = () => setCurrentPage(currentPage + 1)
    // Moving to the previous page
    const paginatePrev = () => setCurrentPage(currentPage - 1)

    useEffect(() => {
        // Disabling the previous button if user is at the first page
        if(indexOfFirstArticle > 0) {
            setIsPrevDisabled(false)
        } else {
            setIsPrevDisabled(true)
        }

        // Disabling the next button if user is at the last page
        if(indexOfLastArticle == data.length) {
            setIsNextDisabled(true)
        } else {
            setIsNextDisabled(false)
        }
    }, [indexOfFirstArticle, indexOfLastArticle])

    return (
        <div id="articles" className="mx-16 mt-32 md:mt-32 mb-32 md:mb-16">
            <h1 className={`${source.className} text-[28px] md:text-[50px] text-center md:text-left text-primaryBlue mb-5 md:mb-10`}>Latest Articles</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-black">
                {currentArticles.map(item => (
                    <div key={item.id} className="flex flex-col items-center border-1 border-gray-200 rounded-3xl p-6 hover:shadow-lg hover:border-gray-400 duration-200">
                        <div className="mb-10 md:mb-6">
                            <Image src={item.imageUri} alt={item.title}/>
                        </div>

                        <div>
                           <div className="flex flex-col items-center lg:items-start">
                               <h3 className={`${poppins.className} mb-3 text-primaryBlue text-[16px] md:text-[21px]`}>{item.title}</h3>
                               <p className="text-bodyBlack text-[12px] md:text-[15px] mb-8 text-center lg:text-left">{item.description}</p>
                           </div>    
        
                           <div className="flex justify-center lg:justify-start">
                               <button className={`w-[118px] md:w-[131px] h-[32px] md:h-[42px] ${source.className} text-[11px] md:text-[16px] border-1 border-bodyBlack text-bodyBlack rounded-full hover:bg-gray-100 duration-200`}>Read More</button>
                           </div>
                        </div>
                    </div>
                ))}
        </div>

        <div className="text-[#424961] flex items-center justify-center mt-10 md:mt-16">
            <button onClick={paginatePrev} disabled={isPrevDisabled} className="border-1 border-gray-300 p-1 rounded-lg"><GrFormPrevious className="text-primaryBlue" size={25} /></button>
            <p className={`${source.className} mx-3 text-primaryBlue tracking-wider`}>{currentPage}/2</p>
            <button onClick={paginateNext} disabled={isNextDisabled} className="border-1 border-gray-300 p-1 rounded-lg"><GrFormNext className="text-primaryBlue" size={25} /></button>
        </div>
    </div>
  )
}

export default Articles