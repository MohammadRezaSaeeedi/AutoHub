"use client" 
import carsData from "@/data/carsData"

import Cras from "./Cras"
import Link from "next/link";

function AllCars() {
    const result = carsData.slice(0,4);

  return (
    <>  
        <Link href="/cars">
        <div className="flex justify-center mt-1 sm:mt-6  cursor-pointer ">
        <div className="p-1 sm:p-2 text-sm  sm:text-3xl flex justify-center bg-emerald-300 text-white rounded-md w-[100px] h-[28px] sm:w-[300px] sm:h-[50px] md:w-[300px] md:h-[50px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] ">
        <span>See all cars</span>
        </div>
        
        </div>
        </Link>
        <Cras carsData={result} />
        </>
  )

}

export default AllCars