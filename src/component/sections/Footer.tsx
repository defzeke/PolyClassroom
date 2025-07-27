export default function Footer() {
    return (
        <div className="w-full bg-[#111827] text-white py-10 shadow-md">
            <div className="flex items-center justify-between px-10">
                <div className="flex items-center gap-x-6">
                    <img className="w-16 h-16" src="./polyclass.svg" alt="PolyClassroom Logo" />
                    <p className="text-[#fff] font-bold text-2xl">PolyClassroom</p>
                </div>
                <div>
                    <span className="text-white">© 2025 PolyClassroom. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}