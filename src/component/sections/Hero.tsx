"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const btn1Ref = useRef<HTMLButtonElement>(null);
    const btn2Ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (headingRef.current) headingRef.current.classList.add("visible");
        if (btn1Ref.current) btn1Ref.current.classList.add("visible");
        if (btn2Ref.current) btn2Ref.current.classList.add("visible");
    }, []);

    return (
        <>
            <div>
                <h1 ref={headingRef} className="text-6xl font-bold text-left fade-slide-right">
                    <span className="text-[#1F2937]">The Smarter Way to</span> 
                    
                    <br></br>

                    <span className="bg-gradient-to-r from-[#8E2424] to-[#711C1C] bg-clip-text text-transparent">Learn at PUP</span>

                    <span className="block text-xl font-normal text-[#4B5574] max-w-[600px] mt-5">
                        Transform your classroom experience with our comprehensive platform designed for modern education. Connect, collaborate, and create lasting educational impact.
                    </span>
                </h1>

                <div className="inline-block transition-transform duration-300 hover:scale-97">
                    <button
                        ref={btn1Ref}
                        onClick={() => {
                            window.dispatchEvent(new Event("open-signin"));
                        }}
                        className="mt-9 font-bold text-white px-12 py-3 rounded-xl bg-gradient-to-r from-[#942E2E] to-[#B06262] 
                        bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 cursor-pointer button-pop"
                    >
                        Start Learning
                    </button>
                    </div>

                    <div className="inline-block transition-transform duration-300 hover:scale-97 ml-5">
                    <button
                        ref={btn2Ref}
                        onClick={() => {
                            window.dispatchEvent(new Event("open-signup"));
                        }}
                        className="text-[#374169] px-12 py-3 outline rounded-xl outline-[#D1D5DB] outline-2 font-bold hover:text-[#942E2E] hover:outline-[#942E2E] transition-all duration-500 cursor-pointer button-pop"
                    >
                        Create Account
                    </button>
                    </div>

                <div className="flex items-center gap-4 tracking-tight text-sm">
                    <div className="mt-5 px-1 py-1 rounded-[100] bg-green-500 w-1">
                    </div>
                    <p className="mt-5 text-[#4B5574]">Free to use</p>

                    <div className="ml-5 mt-5 px-1 py-1 rounded-[100] bg-green-500 w-1">
                    </div>
                    <p className="mt-5 text-[#4B5574]">No Credit Card Required</p>

                    <div className="ml-5 mt-5 px-1 py-1 rounded-[100] bg-green-500 w-1">
                    </div>
                    <p className="mt-5 text-[#4B5574]">Setup in minutes</p>
                </div>
            </div>
        </>
    );
}