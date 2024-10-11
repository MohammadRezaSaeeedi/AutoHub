"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchCard() {

  const router = useRouter();

const [min , setMin] = useState("");
const [max , setMax] = useState("");

  
const searchHandler = () => {
  if(min && max ) {
  router.push(`/filter/${min}/${max}`)
  } else {
    alert("enter a min-price and max-price")
  }
}

  return (
    <div className="flex justify-center mt-10">
        <div className="relative w-[200px] h-[80px] sm:w-[500px] sm:h-[80px] md:w-[500px] md:h-[80px]  z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px]">
        <div className="absolute w-[190px] h-[70px]  sm:w-[490px] sm:h-[70px] md:w-[490px] md:h-[70px]   z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
        <div className="flex flex-row-reverse p-2 gap-1 " >
  
          <button className=" bg-emerald-200 w-1/3  rounded-md h-[56px] text-white font-bold text-sm sm:text-3xl" onClick={searchHandler}>Search</button>
          
            <div className="flex flex-col w-2/3 border-2 border-emerald-200 rounded-md text-[10px] sm:text-base">
                <input onChange={(e) => (setMin(e.target.value))} type="number" placeholder="enter min-price.." className="w-full h-1/2 outline-emerald-200 pl-2 border-2 border-emerald-200 text-emerald-700 appearance-none  " value={min} />
                <input onChange={(e) => (setMax(e.target.value))} type="number" placeholder="enter max-price.." className="w-full h-1/2 outline-emerald-200 pl-2 border-2 border-emerald-200 text-emerald-700 appearance-none   "  value={max}/>
            </div>
        </div>
        </div>
    <div className=" absolute -z-50 w-[800px] h-[80px] bg-emerald-400 opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4 "></div>
    </div>
    </div>
  )
}
export default SearchCard
  
  