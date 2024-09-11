import { useGlobalContext } from "@/ContextApi";
import { CloseOutlined, MenuOpenRounded } from "@mui/icons-material";

function SideBarMenuObject(){
    const {
        openSideBarObject:{openSideBar, setOpenSideBar}
    } = useGlobalContext();
    return(
        (!openSideBar?(
            <div onClick={()=>setOpenSideBar(!openSideBar)} className="text-slate-500 cursor-pointer hidden max-md:block">
                <MenuOpenRounded />
            </div>
        ):(
            <div onClick={()=>setOpenSideBar(!openSideBar)} className="text-slate-500 cursor-pointer hidden max-md:block">
                <CloseOutlined />
            </div>
        ))
    )
}

export default SideBarMenuObject;