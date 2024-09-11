"use client";
import { useGlobalContext } from "@/ContextApi";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/ThemeMode";
import SideBarMenuObject from "./TopBar/SideBarMenuObject";
import SwipeTagSelector from "./NotesArea/SwipeTagSelector";
const ContentArea = () =>{
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    return(
        <div className={`w-[100%] ${themeMode[1].isSelected?'bg-slate-700':'bg-slate-100'} p-5`}>
            <TopBar />
            <NotesArea />
        </div>
    )
}

function TopBar(){
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    return(
        <div className={`rounded-lg flex justify-between items-center ${themeMode[1].isSelected?'bg-slate-800':'bg-white'} p-3`}>
            <ProfileUser />
            <SearchBar />
            <DarkMode />
            <SideBarMenuObject />
        </div>
    )
}

function NotesArea(){
    return(
        <div className="mt-[20px]">
            <SwipeTagSelector />
        </div>
    )
}

export default ContentArea;