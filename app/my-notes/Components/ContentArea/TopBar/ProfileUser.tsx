"use client";
import { useUser } from "@clerk/nextjs";

const ProfileUser = () =>{
    const {user} = useUser();
    const imageUrl = user?.imageUrl

    const loading = (
        <div className="w-9 h-9 rounded-full mb-[5x] bg-slate-200"></div>
    )
    return(
        <div className="flex gap-3 items-center">
            {!user?(
                loading
            ):(
                <img src={imageUrl} className="w-9 h-9 rounded-full mb-[5x]" alt={`${user?.firstName} ${user?.lastName}`} />
                
            )}
            <div className="flex flex-col text-sm">
                <span className="font-semibold">
                    {user?.lastName} {user?.firstName}
                </span>
                <span className="text-slate-500 text-[11px]">
                    {user?.emailAddresses[0].emailAddress}
                </span>
            </div>
        </div>
    )
}

export default ProfileUser;