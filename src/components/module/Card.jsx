import Image from "next/image";
import Link from "next/link";
import Location from "../icons/Location";



function Card(props) {
   
   const {id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href="">
        {/* <div className="w-[220px]  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl relative overflow-hidden  "> */}
            <div className="relative w-[230px] h-[300px] z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px]">
            <div className="absolute w-[220px] h-[290px] z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
            <Image src={image} width={700} height={500} alt={name} className="rounded-t-xl" />
            <p className="pl-1 pt-2 font-bold" >{`${name} ${model}`}</p>
            <p className=" pl-1 py-2 text-sm" >{`${year} . ${distance}`}</p>
            <div className="flex flex-row-reverse justify-between">
                <p className=" p-1 rounded-xl text-sm bg-emerald-200 inline-block " >$ {price}</p>
                <div className="flex flex-row-reverse gap-1 text-sm ">
                    <p>{location}</p>
                    <Location className="text-sm" />
                </div>
            </div>
                </div>
            <div className=" absolute z-[1] w-[160px] h-[160px] bg-emerald-400 opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4"></div>
           
        </div>
    </Link>
  )
}

export default Card