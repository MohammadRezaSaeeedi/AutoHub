"use client" 
import carsData from "@/data/carsData"
import { useState, useEffect } from "react";
import Cras from "./Cras"
import Link from "next/link";

function AllCars() {

  const [itemsToShow, setItemsToShow] = useState(3); // initial value for mobile

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 1024) {
              setItemsToShow(4); // for screens larger than mobile
          } else {
              setItemsToShow(3); // for mobile screens
          }
      };

      window.addEventListener("resize", handleResize);

      // Check screen size on initial load
      handleResize();

      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", handleResize);
  }, []);
 
    const result = carsData.slice(0,itemsToShow);
    

  return (
    <>  
        <Link href="/cars">
        <div className="flex justify-center mt-1 sm:mt-6  cursor-pointer ">
        <div className="p-1 sm:p-2 text-sm  sm:text-3xl flex justify-center bg-Classic_blue text-white rounded-md w-[100px] h-[28px] sm:w-[300px] sm:h-[50px] md:w-[300px] md:h-[50px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] ">
        <span>See all cars</span>
        </div>
        
        </div>
        </Link>
        <Cras carsData={result}  />
        </>
  )

}

export default AllCars