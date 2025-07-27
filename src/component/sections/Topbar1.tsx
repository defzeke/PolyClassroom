export default function TopBar() {
    return (
        <>
            <div className="flex items-center gap-3">
                <img className="w-14 h-14" src="./polyclass.svg" alt="PolyClass Logo" draggable="false" />
                <p className="text-[#791E1E] font-bold text-2xl">PolyClassroom</p>
            </div>
            <div className="flex items-center ml-165 gap-20 text-[#4B5563] ">
                <a href="#features" className="hover:text-[#791E1E] cursor-pointer transition">Features</a>
                <a href="#about" className="hover:text-[#791E1E] cursor-pointer transition">About</a>
                <a href="#contacts" className="hover:text-[#791E1E] cursor-pointer transition">Contact</a>
            </div>
        </>
    );
}