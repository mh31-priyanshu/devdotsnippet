"use client";
import { DarkMode, DeleteOutlined, FavoriteBorder, LightMode, Logout } from '@mui/icons-material';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import React, { useContext, useState, createContext } from "react";

interface SideBarMenu {
    id: number;
    name: string;
    isSelected: boolean;
    icons: React.ReactNode;
}
interface ThemeModeOptions {
    id: number;
    mode: string;
    isSelected: boolean;
    icons: React.ReactNode;
}

interface GlobalContextType {
    sideBarMenuObject: {
        sideBarMenu: SideBarMenu[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
    };
    themeModeObject: {
        themeMode: ThemeModeOptions[];
        setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeOptions[]>>;
    };
    openSideBarObject:{
        openSideBar : boolean;
        setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

// Initialize context with undefined to enforce proper use inside Provider
const ContextProvider = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalContextProvider({ children }: { children: React.ReactNode }) {
    const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
        {
            id: 1,
            name: "All Snippets",
            isSelected: true,
            icons: <BorderAllIcon sx={{ fontSize: 18 }} />
        },
        {
            id: 2,
            name: "Favourites",
            isSelected: false,
            icons: <FavoriteBorder sx={{ fontSize: 18 }} />
        },
        {
            id: 3,
            name: "Trash",
            isSelected: false,
            icons: <DeleteOutlined sx={{ fontSize: 18 }} />
        },
        {
            id: 4,
            name: "Log Out",
            isSelected: false,
            icons: <Logout sx={{ fontSize: 18 }} />
        },
    ]);

    const [themeMode, setThemeMode] = useState<ThemeModeOptions[]>([
        {
            id: 1,
            mode: "light",
            icons: <LightMode sx={{ fontSize: 18 }} />,
            isSelected: true
        },
        {
            id: 2,
            mode: "dark",
            icons: <DarkMode sx={{ fontSize: 18 }} />,
            isSelected: false
        }
    ]);

    const [openSideBar, setOpenSideBar] = useState(false);


    return (
        <ContextProvider.Provider
            value={{
                sideBarMenuObject: { sideBarMenu, setSideBarMenu },
                themeModeObject: { themeMode, setThemeMode },
                openSideBarObject: {openSideBar, setOpenSideBar},
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
}

export const useGlobalContext = () => {
    const context = useContext(ContextProvider);
    
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    
    return context;
};
