"use client";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type TopbarProps = {
    onToggleSidebar?: () => void;
    isSidebarOpen?: boolean;
};

export default function Topbar({ onToggleSidebar, isSidebarOpen }: TopbarProps) {
    return (
        <div className="bg-gradient-to-r from-[#F8F2F2] via-[#fff] to-[#F8F2F2] w-full p-5 shadow-md outline outline-black/10">
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    aria-label={isSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
                    aria-pressed={isSidebarOpen}
                    onClick={onToggleSidebar}
                    className="text-[#737373] hover:text-[#800000] transition-colors"
                >
                    <MenuOutlinedIcon />
                </button>

                <button
                    type="button"
                    aria-label="Open profile menu"
                    className="inline-flex items-center justify-center text-[#737373]"
                >
                    <AccountCircleIcon className="m-0 p-0 leading-none scale-125" />
                </button>
            </div>
        </div>
    );
}