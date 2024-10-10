

import Car from "./Card"


function Cras( { carsData }) {
    
  return (
      <div className="grid grid-cols-4 gap-10 mx-10 py-8 justify-items-center ">
   
   { carsData.map((car) => (
      <Car key={car.id} {...car} />
)
     )}
        </div>
    
  )
}

export default Cras