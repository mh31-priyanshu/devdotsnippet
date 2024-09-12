"use client";
import React, { useState } from 'react';
import { SiCplusplus, SiJavascript, SiPython, SiSquare } from '@icons-pack/react-simple-icons';
import { useGlobalContext } from '@/ContextApi';
export default function Sidebar(){
    const {
        themeModeObject:{themeMode},
        openSideBarObject:{openSideBar}
    } = useGlobalContext();
    return (
        <div className={`${openSideBar?'max-md:block z-50 fixed shadow-lg':'max-md:hidden'}  w-[60%] h-screen flex flex-col pt-7  p-5 ${!themeMode[1].isSelected?'bg-white':'bg-slate-800'}`}>
            <Logo />
            <QuickLinks />
            <Languages />
        </div>
    )
}

function Logo(){
    return(
      <div className="h-[50px] w-[90%] bg-[#8338ec] items-center"></div>
    )
}

function QuickLinks(){
    const {
        sideBarMenuObject:{sideBarMenu, setSideBarMenu}
    } = useGlobalContext();
    console.log(sideBarMenu)
    const activeButton = "flex cursor-pointer select-none gap-1 items-center bg-purple-600 text-white py-2 p-[7x] px-2 rounded-md w-[60%]"
    const inActiveButton = "flex cursor-pointer select-none gap-1 items-center hover:bg-purple-600 hover:text-white py-2 p-[7x] px-2 rounded-md w-[60%]"

    function clickedMenu(index: number){
        const updatedSideBarMenu = sideBarMenu.map((menu,i)=>{
            if(i==index){
                return {...menu, isSelected:true};
            }else{
                return {...menu, isSelected:false};
            }
        })
        setSideBarMenu(updatedSideBarMenu)
    }
    return(
        <div className="mt-20 text-sm">
            <div className="font-bold text-slate-400">Quick Links</div>
            <ul className="text-slate-400 mt-4 flex flex-col gap-2">
                {sideBarMenu.map((menu, index)=>(
                    <li
                        key={index}
                        onClick={() => clickedMenu(index)}
                        className={menu.isSelected?activeButton:inActiveButton}
                    >
                        {menu.icons}
                        <span>{menu.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Languages(){
    return(
        <div className="mt-14 text-sm">
            <div className="font-bold text-slate-400">Languages</div>
            <div className="text-slate-400 mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className='flex gap-1'>
                        <SiPython width={18}/>
                        <span>Python</span>
                    </div>
                    <span className='font-bold'>12</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex gap-1'>
                        <SiJavascript width={18}/>
                        <span>Javascript</span>
                    </div>
                    <span className='font-bold'>8</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex gap-1'>
                        <SiCplusplus width={18}/>
                        <span>C++</span>
                    </div>
                    <span className='font-bold'>17</span>
                </div>
            </div>
        </div>
    );
}