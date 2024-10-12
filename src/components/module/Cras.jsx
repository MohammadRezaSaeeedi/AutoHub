

import Card from "./Card"


function Cras( { carsData }) {
    
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 py-4 sm:py-8 justify-items-center  ">
   
   { carsData.map((car) => (
      <Card key={car.id} {...car} />
)
     )}
        </div>
    
  )
}

export default Cras