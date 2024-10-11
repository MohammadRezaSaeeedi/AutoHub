'use client'
import Link from "next/link"
import Sedan from "../icons/Sedan"
import Suv from "../icons/Suv"
import Sport from "../icons/Sport"
import Hatchback from "../icons/Hatchback"




function CategoryCard() {
   
  return (
    <div className="justify-center flex mt-10 ">
       <div className="relative w-[200px] h-[50px] sm:w-[500px] sm:h-[100px] md:w-[758px] md:h-[110px]  z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px]">
       <div className="absolute w-[190px] h-[40px]  sm:w-[490px] sm:h-[90px] md:w-[748px] md:h-[100px]   z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
    <div  className="flex justify-between  sm:gap-4 w-[190px] sm:w-[490px] md:w-[748px]  p-2 rounded-lg   " >
      <Link href={`/category/${'sedan'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px]  md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-200 p-2 rounded-md " >
        <span>Sedan</span>
        <div className="hidden sm:block " >
          <Sedan />
        </div>
      </div >
      </Link>
      <Link href={`/category/${'suv'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-200 p-2 rounded-md">
        <span>SUV</span>
        <div className="hidden sm:block " >
          <Suv />
        </div>
      </div>
      </Link>
      <Link href={`/category/${'hatchback'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-200 p-2 rounded-md">
        <span>Hatchback</span>
        <div className="hidden sm:block " >
          <Hatchback />
        </div>
      </div>
      </Link>
      <Link href={`/category/${'sport'}`}>
      <div className="flex flex-col sm:gap-2 w-[40px] sm:w-[90px] md:w-[150px] sm:font-bold items-center text-[7px] sm:text-sm md:text-2xl text-white bg-emerald-200 p-2 rounded-md">
        <span className="hidden sm:block">Sport Cars</span>
        <span className="sm:hidden" >Sport</span>
        <div className="hidden sm:block " >
          <Sport />
        </div>
      </div>
      </Link>
    </div>
    </div>
    <div className=" absolute -z-50 w-[800px] h-[80px] bg-emerald-400 opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4 "></div>
    </div>
    </div>
  )
}

export default CategoryCard;