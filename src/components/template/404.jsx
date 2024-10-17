import Link from "next/link"
import Danger from "../icons/Danger"
function NoFound() {
  return (
    <div className="  my-[80px] flex justify-center ">
    <div className="bg-Classic_blue text-white w-[300px] sm:w-[600px] md:w-[758px]  overflow-hidden rounded-md flex ">
    <div className=" hidden sm:block sm:mt-[110px] md:mt-[150px] ml-[25px]">
      <Danger />
      </div>
  <div className="text-center block relative w-3/5 mx-auto my-[40px] sm:my-[70px] md:my-[100px]" >
      
      
      <div className="text-center block relative tracking-[12px] sm:text-[2em] md:text-[4em] leading-[80%] ">THE PAGE</div>
      <div className="text-center block relative text-sm sm:text-xl  my-[30px] ">WAS NOT FOUND</div>
      <div className="text-center block relative text-xl sm:text-3xl  my-[30px] ">404</div>
      <Link  href="/" > <span className="border-2 p-3 rounded-md text-[5px] sm:text-[10px] md:text-[12px] bg-clip-text text-transparent  bg-[linear-gradient(to_left,theme(colors.white),theme(colors.slate.900),theme(colors.teal.600))] bg-[length:200%_auto]  animate-gradient">BACK TO HOME</span></Link>
  </div>
  <div className=" hidden sm:block sm:mt-[110px] md:mt-[150px] mr-[25px]">
      <Danger />
      </div>
  </div>
  </div>
  )
}

export default NoFound;