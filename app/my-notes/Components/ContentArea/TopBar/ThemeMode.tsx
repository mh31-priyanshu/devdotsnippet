"use client";
import { useGlobalContext } from "@/ContextApi";

function ThemeMode(){
    const {
        themeModeObject:{themeMode, setThemeMode}
    } = useGlobalContext();
    console.log(themeMode)
    const activeButton = "flex cursor-pointer select-none gap-1 items-center bg-purple-600 text-white py-2 p-[7x] px-2 rounded-md w-[60%]"
    const inActiveButton = "flex cursor-pointer select-none gap-1 items-center hover:bg-purple-600 hover:text-white py-2 p-[7x] px-2 rounded-md w-[60%]"

    function clickedMenu(index: number){
        const updatedTheme = themeMode.map((menu,i)=>{
            if(i==index){
                return {...menu, isSelected:true};
            }else{
                return {...menu, isSelected:false};
            }
        })
        setThemeMode(updatedTheme)
    }
    return(
        <div className="flex  bg-slate-100 rounded-3xl">
            {themeMode.map((mode,index)=>{
                <div >

                </div>
            })}
            
        </div>ṭ
    )
}

export default ThemeMode;