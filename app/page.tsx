"use client";
import { mainColor } from "@/Colors";
import { useAuth } from "@clerk/clerk-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTAsection />
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
    <div className="h-[50px] w-[200px] bg-[#8338ec]"></div>
  )
}

function Buttons(){
  const { userId } = useAuth();
  return(
    <div className="max-sm:w-full">
      {userId?(
        <Link href="/my-notes">
          <button className="max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-white rounded-md">
            Access to the App
          </button>
        </Link>
      ):(
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <Link href="/sign-in">
            <button className="max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-sm text-white rounded-md">
              Sign In
            </button>
          </Link>
          
          <Link href="/sign-up">
            <button className="text-sm border border-[#8338ec] text-[#8338ec] hover:text-white hover:bg-[#8338ec] p-[8px] px-6 rounded-md">
              Sign Up
            </button>
          </Link>
          
        </div>
      )}
    </div>
    
  )
}

function CTAsection(){
  return(
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Organize Your Code Snippets
        <span className="text-[#8338ec]"> Efficiently</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time witing it.
      </p>
      <button className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none" type="button">
        {`Let's get started`}
      </button>
    </div>
  );
}