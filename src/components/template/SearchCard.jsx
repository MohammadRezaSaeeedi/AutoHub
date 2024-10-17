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
    <div className="flex justify-center mt-3 sm:mt-6">
      
        <div className="flex flex-row-reverse p-1 gap-1 w-[150px] h-[42px] sm:w-[400px] sm:h-[68px] md:w-[500px] md:h-[68px] border-dashed border-2 rounded-md  border-Classic_blue" >
  
          <button className=" bg-Classic_blue w-1/3  rounded-md h-[29px] sm:h-[56px]  text-white font-bold text-[10px] sm:text-3xl " onClick={searchHandler}>Search</button>
          
            <div className="flex flex-col w-2/3 gap-1 text-[8px] h-[26px] sm:h-[56px] sm:text-base">
                <input onChange={(e) => (setMin(e.target.value))} type="number" placeholder="enter min-price.." className="w-full h-1/2 rounded-sm sm:rounded-md  outline-Classic_blue pl-1 sm:pl-2 border-2 border-Classic_blue text-Classic_blue appearance-none  " value={min} />
                <input onChange={(e) => (setMax(e.target.value))} type="number" placeholder="enter max-price.." className="w-full h-1/2 rounded-sm sm:rounded-md  outline-Classic_blue pl-1 sm:pl-2 border-2 border-Classic_blue text-Classic_blue appearance-none   "  value={max}/>
            </div>
        </div>
       
    </div>
  )
}
export default SearchCard
  
  