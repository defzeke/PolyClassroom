"use client";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export default function Sidebar() {
    const navItemBase =
    '-ml-2 group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-[#800000] bg-white/70 hover:bg-white backdrop-blur-sm transition-all duration-200 will-change-transform shadow-sm hover:shadow-md ring-1 ring-black/5 hover:ring-black/10 active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#800000]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white before:absolute before:left-1 before:top-1 before:bottom-1 before:w-1 before:rounded-full before:bg-[#800000]/0 group-hover:before:bg-[#800000]/70';

    return (
        <>
            <div className="w-64 min-h-screen bg-white text-black p-10 outline outline-1 outline-black/10 flex flex-col">
                <div className="flex items-center gap-2 -mt-3">
                        <img
                            className="w-9 h-9"
                            src="/polyclass.svg"
                            alt="PolyClassroom logo"
                            draggable="false"
                        />
                        <div className="flex flex-col leading-tight">
                                <span className="font-bold text-md text-[#800000]">PolyClassroom</span>
                                <span className="text-[11px] text-[#6B7280] -mt-0.5 tracking-tight">Learning Platform</span>
                        </div>
                </div>

                <div className="mt-10">
                    <p className="text-[0.8rem] font-bold text-[#800000]">NAVIGATION</p>
                    <div className="flex flex-col mt-2 gap-2">
                        <button
                            className={navItemBase}
                            type="button"
                            aria-label="Home"
                            title="Home"
                        >
                            <HomeOutlinedIcon className="text-[20px] opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            <span className="font-semibold tracking-tight whitespace-nowrap">Home</span>
                        </button>

                        <button
                            className={navItemBase}
                            type="button"
                            aria-label="Classes"
                            title="Classes"
                        >
                            <MenuBookOutlinedIcon className="text-[20px] opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            <span className="font-semibold tracking-tight whitespace-nowrap">Classes</span>
                        </button>

                        <button
                            className={navItemBase}
                            type="button"
                            aria-label="Archived"
                            title="Archived"
                        >
                            <Inventory2OutlinedIcon className="text-[20px] opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            <span className="font-semibold tracking-tight whitespace-nowrap">Archived</span>
                        </button>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className="text-[0.8rem] font-bold text-[#800000]">QUICK ACTIONS</p>
                    <div className="flex flex-col mt-2 gap-2">
                        <button
                            className={navItemBase}
                            type="button"
                            aria-label="Settings"
                            title="Settings"
                        >
                            <SettingsOutlinedIcon className="text-[20px] opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            <span className="font-semibold tracking-tight whitespace-nowrap">Settings</span>
                        </button>
                        
                        <button
                            className={navItemBase}
                            type="button"
                            aria-label="To do"
                            title="To do"
                        >
                            <ListAltOutlinedIcon className="text-[20px] opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                            <span className="font-semibold tracking-tight whitespace-nowrap">To do</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

