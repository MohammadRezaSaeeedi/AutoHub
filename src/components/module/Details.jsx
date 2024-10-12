import Link from "next/link";
import Image from "next/image";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

function Details({result}) {
const {id, name, model, year, distance, location, image, price, description, } = result
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
         <div className="relative  w-[300px] h-[220px] sm:w-[500px] sm:h-[410px] z-[1111] md:w-[710px] md:h-[510px] overflow-hidden flex flex-col items-center justify-center shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-[14px]">
         <div className="absolute w-[290px] h-[210px] sm:w-[490px] sm:h-[400px] md:w-[700px] md:h-[500px] z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
        <Image src={image} width={700} height={500} alt={name} className="rounded-lg w-[290px] h-[210px] sm:w-[490px] sm:h-[400px] md:w-[700px] md:h-[500px]" />
         </div>
         <div className=" absolute z-[1] w-[400px] h-[400px] bg-emerald-400 opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4"></div>
         </div>
        
    
        <p className='mt-10 font-bold text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-[linear-gradient(to_left,theme(colors.emerald.400),theme(colors.slate.900),theme(colors.teal.600))] bg-[length:200%_auto]  animate-gradient' >{`${name} ${model}`}</p>
        
        <div className="mt-10  w-[300px] sm:w-[500px] md:w-[710px] shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-md flex flex-col gap-4 p-2 " >
        <div className="flex flex-row-reverse justify-between">
            <p>{name}</p>
            <div className="flex flex-row-reverse gap-1 " >
                <p>Company</p>
              <div>  <Company /> </div>
            </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
            <p>{model}</p>
            <div className="flex flex-row-reverse gap-2 ">
                <p>Model</p>
                <div>
                <Model />
                </div>
            </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
            <p>{year}</p>
            <div className="flex flex-row-reverse gap-1 ">
                <p>Fierst registration</p>
                <div>

                <Calender />
                </div>
            </div>
        </div>
        <div className="flex flex-row-reverse justify-between" >
            <p>{distance}</p>
            <div className="flex flex-row-reverse gap-1 ">
                <p>kms driven</p>
                <div>

                <Road />
                </div>
            </div>
        </div>
       </div>
       <div className="mt-10 w-[300px]  sm:w-[500px] md:w-[710px] shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-md flex flex-row-reverse justify-between gap-4 p-2 ">
        <p>{location}</p>
        <div className="flex flex-row-reverse gap-1 " > 
            <p>Location</p>
            <div>
            <Location />
            </div>
        </div>
       </div>
       <div className="mt-10  w-[300px] sm:w-[500px] md:w-[710px]  shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-md flex flex-col justify-between gap-4 p-2 ">
        <p className="font-bold" >Extra Information</p>
        <p className="text-sm font-serif" >{description}</p>
       </div>
       <div className="mt-10  w-[300px] sm:w-[500px] md:w-[710px] shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-md flex flex-row-reverse justify-between gap-4 p-2 ">
        <p>{price}</p>
        <div className="flex flex-row-reverse gap-1 ">
            <p>Price</p>
            <div  >
            <Money   />
            </div>
        </div>
       </div>
       <Link href="/">
       <button className=" mt-10  w-[300px] sm:w-[500px] md:w-[710px] shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] p-1 bg-emerald-300 font-bold text-2xl rounded-md" >Buy</button>
       </Link>
    </div>
  )
}

export default Details; 