import { useGlobalContext } from "@/ContextApi";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export default function AllNotesArea(){
    return(
        <div className="flex mt-5 gap-4 flex-wrap">
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    );
}

function SingleNote(){
    const {
        themeModeObject: {themeMode}
    } = useGlobalContext();
    return (
        <div className={`${themeMode[1].isSelected?'bg-slate-800':'bg-white'} w-[320px] max-sm:w-[100%] rounded-md p-4 `}>
            <NotesHeader />
            <NoteTags />
            <NotesDate />
            <NotesDescription />
        </div>
    );
}

function NotesHeader(){
    const {
        themeModeObject: {themeMode}
    } = useGlobalContext();
    return (
        <div className="flex justify-between mx-4">
            <span className={`${themeMode[1].isSelected?'text-slate-300':'text-black'} w-[87%] text-lg font-bold`}>Lorem Ipsum is simply dummy text of the printing</span>
            <FavoriteBorderOutlined className="text-slate-400 cursor-pointer"/>
        </div>
    );
}
function NoteTags(){
    return(
        <div className="text-slate-500 text-[11px] mx-4 flex flex-wrap gap-2 mt-4">
            <div className="bg-purple-100 text-purple-600 p-1 rounded-md px-2 ">functions</div>
            <div className="bg-purple-100 text-purple-600 p-1 rounded-md px-2">functions</div>
            <div className="bg-purple-100 text-purple-600 p-1 rounded-md px-2">functions</div>
        </div>
    )
}
function NotesDate(){
    return (
        <div className="font-light text-slate-500 text-[11px] mx-4 mt-1">
            12th September 2024
        </div>
    )
}

function NotesDescription(){
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    return (
        <div className={`${themeMode[1].isSelected?"text-slate-300":"text-slate-600"} text-[11px] mt-4 mx-4`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        </div>
    )
}
