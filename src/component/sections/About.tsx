"use client";

import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useRef } from "react";

export default function About() {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const imgBoxRef = useRef<HTMLDivElement>(null);
    const heroBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = aboutSectionRef.current;
        if (!section) return;

        const boxes = section.querySelectorAll('.fade-slide-right, .fade-slide-left, .fade-in-up');
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });

        boxes.forEach(box => observer.observe(box));
        return () => observer.disconnect();
    }, []);

        

    return (
        <>
            <div ref={aboutSectionRef} id="about" className="flex flex-row items-center w-full min-h-[400px] px-16 relative scroll-mt-30">
                <div ref={imgBoxRef} className='fade-slide-right'>
                    <img src="/studemts.jpg" className="h-[400px] w-auto rounded-[20px] mr-20 ml-15" alt="Students" />
                    <div className="absolute left-105 top-90 bg-white p-6 rounded-xl shadow-lg z-10">
                        <p className=" flex items-center align-middle text-[#4B5574]"><span className='text-green-400 mr-2'><CircleIcon style={{ fontSize: 12 }} /></span>5,000+ students learning right now!</p>
                </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div ref={heroBoxRef} className='fade-slide-left'>    
                        <h1 className="text-6xl font-bold text-left">
                            <span className="text-[#1F2937]">Revolutionizing education <br />with </span>
                            <span className="bg-gradient-to-r from-[#8E2424] to-[#711C1C] bg-clip-text text-transparent">
                                AI-powered content <br />creation
                            </span>
                        </h1>
                        <span className="block text-xl font-normal text-[#4B5574] max-w-[800px] mt-5">
                            Our platform uses advanced AI to automatically generate personalized quizzes and comprehensive reviewers from your course materials. Empower educators to save time while providing students with tailored study materials that enhance learning outcomes.
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col p-10 mt-20 justift-center items-center'>
                <div className='flex flex-wrap gap-8 mt-5 fade-in-up'>
                    <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-auto cursor-pointer">
                        <div className=' flex flex-col bg-white py-10 rounded-xl shadow-lg text-[#4B5574] text-sm w-80 items-center justify-center'><span className='flex items-center justify-center text-[#8E2424] font-extrabold text-3xl mb-2'>5K+</span>Active Students</div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-auto cursor-pointer">
                        <div className=' flex flex-col bg-white py-10 rounded-xl shadow-lg text-[#4B5574] text-sm w-80 items-center justify-center'><span className='flex items-center justify-center text-[#8E2424] font-extrabold text-3xl mb-2'>10+</span>Partner Schools</div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-auto cursor-pointer">
                        <div className=' flex flex-col bg-white py-10 rounded-xl shadow-lg text-[#4B5574] text-sm w-80 items-center justify-center'><span className='flex items-center justify-center text-[#8E2424] font-extrabold text-3xl mb-2'>10K+</span>Course Completions</div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-auto cursor-pointer">
                        <div className=' flex flex-col bg-white py-10 rounded-xl shadow-lg text-[#4B5574] text-sm w-80 items-center justify-center'><span className='flex items-center justify-center text-[#8E2424] font-extrabold text-3xl mb-2'>1+</span>Countries Served</div>
                    </div>
                </div>
            </div>
        </>
    );
}