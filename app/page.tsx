import { mainColor } from "@/Colors";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
    </div>
  );
}

function Navbar(){
  return(
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  )
}

function Logo(){
  return(
    <div className="h-[50px] w-[100px] bg-white"></div>
  )
}

function Buttons(){
  return(
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button className="max-sm:w-full bg-white p-[8px]">

      </button>
    </div>
  )
}