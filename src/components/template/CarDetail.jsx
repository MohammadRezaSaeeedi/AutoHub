"use client"
import { useParams } from "next/navigation";
import carsData from "@/data/carsData";
import Details from "../module/Details";

function CarDetail() {
    const params = useParams();
    const id = +params.carId;

const handelCar = (carsData , id) => {
    return carsData.find(car => car.id === id)
}
const result = handelCar(carsData,id)

    return(
        <div>
          <Details result={result} />
        </div>
    )
}

export default CarDetail