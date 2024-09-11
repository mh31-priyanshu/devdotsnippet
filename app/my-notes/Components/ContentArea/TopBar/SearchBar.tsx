
import { Search } from "@mui/icons-material";
import { useGlobalContext } from "@/ContextApi";

function SearchBar(){
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    return(
        <div className={`relative pl-3 w-[60%] h-[38px] ${themeMode[1].isSelected?'bg-slate-700':'bg-slate-100'} rounded-3xl flex items-center gap-2`}>
            <Search className="text-purple-500" sx={{fontSize:18}}/>
            <input type="text" placeholder="Search a snippet..."
                className={`w-[70%] outline-none text-sm ${themeMode[1].isSelected?'bg-slate-700':'bg-slate-100'} text-slate-500`}
            />
            <AddSnippetButton />
        </div>
    )
}

function AddSnippetButton(){
    return(
        <div className="absolute flex gap-2 px-3 rounded-3xl max-md:rounded-full bg-purple-500 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
            <div className="font-bold">+</div>
            <div className="max-md:hidden">Snippet</div>
        </div>
    )
}

export default SearchBar;