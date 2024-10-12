'use client'
import Link from "next/link"
import Sedan from "../icons/Sedan"
import Suv from "../icons/Suv"
import Sport from "../icons/Sport"
import Hatchback from "../icons/Hatchback"




function CategoryCard() {
   
  return (
    <div className="justify-center flex sm:mt-4 ">
      
    <div  className="flex justify-between  sm:gap-4 w-[190px] sm:w-[490px] md:w-[748px]  p-2 rounded-lg   " >
      <Link href={`/category/${'sedan'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px]  md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-300 p-2 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)] " >
        <span>Sedan</span>
        <div className="hidden sm:block " >
          <Sedan />
        </div>
      </div >
      </Link>
      <Link href={`/category/${'suv'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-300 p-2 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
        <span>SUV</span>
        <div className="hidden sm:block " >
          <Suv />
        </div>
      </div>
      </Link>
      <Link href={`/category/${'hatchback'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-300 p-2 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
        <span>Hatchback</span>
        <div className="hidden sm:block " >
          <Hatchback />
        </div>
      </div>
      </Link>
      <Link href={`/category/${'sport'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-300 p-2 rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
        <span className="hidden sm:block">Sport Cars</span>
        <span className="sm:hidden" >Sport</span>
        <div className="hidden sm:block " >
          <Sport />
        </div>
      </div>
      </Link>
    </div>
   
    </div>
  )
}

export default CategoryCard;