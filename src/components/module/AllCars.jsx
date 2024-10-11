"use client" 
import carsData from "@/data/carsData"

import Cras from "./Cras"
import Link from "next/link";

function AllCars() {
    const result = carsData.slice(0,4);

  return (
    <>  
        <Link href="/cars">
        <div className="flex justify-center mt-10 mb-10 cursor-pointer">
         <div className="relative w-[200px] h-[45px] sm:w-[500px] sm:h-[60px] md:w-[500px] md:h-[60px]  z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px]">
        <div className="absolute w-[190px] h-[35px]  sm:w-[490px] sm:h-[50px] md:w-[490px] md:h-[50px]   z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
        <div className="p-2 text-sm  sm:text-3xl flex justify-center bg-emerald-200 text-white rounded-md">
        <span>See all cars</span>
        </div>
        </div>
        <div className=" absolute -z-50 w-[800px] h-[80px] bg-emerald-400 opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4 "></div>
        </div>
        </div>
        </Link>
        <Cras carsData={result} />
        </>
  )

}

export default AllCars