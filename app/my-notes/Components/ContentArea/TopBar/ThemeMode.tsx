"use client";
import { useGlobalContext } from "@/ContextApi";

function ThemeMode() {
    const {
        themeModeObject: { themeMode, setThemeMode }
    } = useGlobalContext();
    function clickedMenu(index: number) {
        const updatedTheme = themeMode.map((menu, i) => {
            if (i === index) {
                return { ...menu, isSelected: true };
            } else {
                return { ...menu, isSelected: false };
            }
        });
        setThemeMode(updatedTheme);
    }

    return (
        <>
            <div className="flex bg-slate-100 rounded-3xl mr-5">
                {themeMode.map((mode, index) => {
                    return (
                        <div
                            key={mode.id}
                            className={`flex cursor-pointer select-none gap-1 items-center ${mode.isSelected?'bg-purple-600 text-white':'text-black'} ${mode.mode=='light'?`rounded-full`:`rounded-full`} m-1  p-2 w-[60%]`}
                            onClick={() => clickedMenu(index)}
                        >
                            {mode.icons}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ThemeMode;
