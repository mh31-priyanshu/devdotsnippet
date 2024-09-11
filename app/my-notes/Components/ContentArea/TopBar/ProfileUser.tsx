"use client";
import { useGlobalContext } from "@/ContextApi";
import { useUser } from "@clerk/nextjs";

const ProfileUser = () =>{
    const {user} = useUser();
    const imageUrl = user?.imageUrl
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    const loadingUser = (
        <div className="w-9 h-9 rounded-full mb-[5x] bg-slate-200"></div>
    )
    const loadingName = (
        <div className="w-24 h-3  mb-[15x] bg-slate-200"></div>
    )
    const loadingEmail = (
        <div className="w-28 h-3  mt-2 bg-slate-200"></div>
    )
    return(
        <div className="flex gap-3 items-center">
            {!user?(
                loadingUser
            ):(
                <img src={imageUrl} className="w-9 h-9 rounded-full mb-[5x]" alt={`${user?.firstName} ${user?.lastName}`} />
                
            )}
            <div className="flex flex-col text-sm max-md:hidden">
                {!user?(
                    loadingName
                ):(
                    <span className={`font-semibold ${themeMode[1].isSelected?'text-white':'text-black'}`}>
                        {user?.lastName} {user?.firstName}
                    </span>)            
                }
                {!user?(
                    loadingEmail
                ):(
                    <span className="text-slate-500 text-[11px]">
                        {user?.emailAddresses[0].emailAddress}
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProfileUser;