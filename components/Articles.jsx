import { useEffect, useState } from "react"
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { Source_Sans_Pro, Poppins } from "@next/font/google"

import { data } from "@/utils/data"
import Image from "next/image"

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
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginateNext = () => setCurrentPage(currentPage + 1)
    const paginatePrev = () => setCurrentPage(currentPage - 1)

    useEffect(() => {
        if(indexOfFirstArticle > 0) {
            setIsPrevDisabled(false)
        } else {
            setIsPrevDisabled(true)
        }

        if(indexOfLastArticle == data.length) {
            setIsNextDisabled(true)
        } else {
            setIsNextDisabled(false)
        }
    }, [indexOfFirstArticle, indexOfLastArticle])

    return (
        <div className="mt-32 mb-16 mr-28">
            <h1 className={`${source.className} text-[50px] text-primaryBlue mb-12`}>Latest Articles</h1>

            <div className="flex gap-10 text-black">
                {currentArticles.map(item => (
                    <div key={item.id} className="border-1 border-gray-200 rounded-3xl p-6 hover:shadow-lg hover:border-gray-400 duration-200">
                        <div className="w-[326px] h-[258px] mb-6">
                            <Image src={item.imageUri} alt={item.title}/>
                        </div>

                        <div>
                           <h3 className={`${poppins.className} mb-3 text-primaryBlue text-[21px]`}>{item.title}</h3>
                           <p className="text-bodyBlack mb-8">{item.description}</p>    
                           <button className={`${source.className} py-3 px-8 border-1 border-bodyBlack text-bodyBlack rounded-full hover:bg-gray-100 duration-200`}>Read More</button>
                        </div>
                    </div>
                ))}
        </div>

        <div className="text-[#424961] flex items-center justify-center mt-16">
            <button onClick={paginatePrev} disabled={isPrevDisabled} className="border-1 border-gray-300 p-1 rounded-lg"><GrFormPrevious size={25} /></button>
            <p className="mx-3">{currentPage}/2</p>
            <button onClick={paginateNext} disabled={isNextDisabled} className="border-1 border-gray-300 p-1 rounded-lg"><GrFormNext size={25} /></button>
        </div>
    </div>
  )
}

export default Articles

/**
 * 
 */