import Image from "next/image";
import Link from "next/link";
import Location from "../icons/Location";



function Card(props) {
   
   const {id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
                                                                                                                            
            <div className="relative w-[230px] h-[300px] z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[0_4px_15px_#0000001a,0_-4px_15px_#0000001a] rounded-[14px]">
            <div className="absolute w-[220px] h-[290px] z-[2] backdrop-blur-xl bg-white overflow-hidden rounded-[10px] left-[5px] top-[5px]">
            <Image src={image} width={500} height={700} alt={name} className="rounded-t-xl" />
            <p className="pl-1 pt-2 font-bold text-black " >{`${name} ${model}`}</p>
            <p className=" pl-1 pb-2 pt-3 text-sm text-black" >{`${year} . ${distance}km`}</p>
            <div className="flex flex-row-reverse justify-between px-1 mt-4">
                <p className=" p-1 rounded-lg font-bold text-white text-sm bg-Classic_blue inline-block " >${price.toLocaleString()}</p>
                <div className="flex flex-row-reverse gap-1 text-black  ">
                    <p className="font-semibold ">{location}</p>
                 <div >  <Location /> </div>
                </div>
            </div>
                </div>
            <div className=" absolute z-[1] w-[160px] h-[160px] bg-Classic_blue opacity-100 blur-md animate-[blob_3s_infinite_ease] rounded-[50%] left-2/4 top-2/4"></div>
           
        </div>
    </Link>
  )
}

export default Card