import carsData from "@/data/carsData"
import Cras from "../module/Cras"

function CarsPage() {
  return (
    <Cras carsData={carsData}  />
  )
}

export default CarsPage