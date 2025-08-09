import './home.css'
import Sidebar from "../../component/sections/Sidebar";
import Topbar from "../../component/sections/Topbar2";

export default function HomePage() {
    return (
        <div className="home-background min-h-screen w-full flex flex-row">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />

                <div className="flex-1 p-8">
                    main
                </div>
                
            </div>
        </div>
    );
}