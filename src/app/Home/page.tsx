"use client";

import './home.css';
import Sidebar from "../../component/sections/Sidebar";
import Topbar from "../../component/sections/Topbar2";
import { useState } from 'react';

export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="home-background min-h-screen w-full flex">
            {/* Sidebar column with animated width */}
            <div
                className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-[width] duration-200 ease-in-out overflow-hidden`}
            >
                <Sidebar />
            </div>

            {/* Content column grows to fill */}
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar
                    onToggleSidebar={() => setSidebarOpen((v) => !v)}
                    isSidebarOpen={sidebarOpen}
                />

                <div className="flex-1 p-8">
                    main
                </div>
            </div>
        </div>
    );
}