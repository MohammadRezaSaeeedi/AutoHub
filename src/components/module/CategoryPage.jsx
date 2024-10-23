"use client"

import carsData from "@/data/carsData"
import { useParams  } from "next/navigation"
import { useRouter } from "next/navigation";
import Back from "../icons/Back";
import Card from "./Card";
function CategoryPage() {
    const {categoris} = useParams();
    const router = useRouter();
    
    const backHandler = () => {
        router.back();
    }
    const handelCar = (carsData , categoris) => {
        return carsData.filter(car => car.category === categoris)
    }
    const result = handelCar(carsData,categoris);
    console.log(result)

  return (
    <div className="flex flex-col justify-items-center text-white">
    <div className="bg-Classic_blue inline-block mt-10 p-2 w-[150px] rounded-md font-bold text-3xl  cursor-pointer ml-[80px]"  onClick={backHandler}>
        <div className="flex gap-6 ">
        <div  >
    <Back  />
        </div>
        <span>back</span>

        </div>
    </div >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 py-8 justify-items-center  ">
      {  result.map((car) => ( 
            
            <Card key={car.id} {...car} /> )
    )
}
    </div>
    </div>
  )
}

export default CategoryPage