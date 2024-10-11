"use client"
import carsData from "@/data/carsData";
import { useParams, useRouter  } from "next/navigation"
import Card from "../module/Card";
import Back from "../icons/Back";


function FilterPage() {

const params = useParams();
const router = useRouter();
    
const [min , max] = params.minmax;


const backHandler = () => {
    router.back();
}
 const result =   carsData.filter((car) => (
        car.price >= min && car.price <= max) 
    )
    


    if(!result.length) return <p className="text-3xl font-bold text-black text-center">NotFound</p>
  return (
    <div className="flex flex-col justify-items-center items-center">
    <div className="bg-emerald-200 inline-block mt-10 p-2 w-[150px] rounded-md font-bold text-3xl  cursor-pointer "  onClick={backHandler}>
        <div className="flex gap-6 ">
        <div  >
    <Back  />
        </div>
        <span>back</span>

        </div>
    </div >
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 py-8 justify-items-center  ">
       {result.map((car) => (
        <Card key={car.id} {...car} />
       ))}
    
    </div>
   </div> 
    
  )
}

export default FilterPage