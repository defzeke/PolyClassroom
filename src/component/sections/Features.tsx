"use client";

import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { useEffect, useRef } from "react";

export default function Features() {
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;
        el.classList.add("fade-in-up");
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll('.fade-in-up');
        const observer = new window.IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        boxes.forEach(box => observer.observe(box));
        return () => observer.disconnect();
    }, []);

    return (
        <div id='features' className="bg-[#FCF0F0] w-screen py-12 flex flex-col items-center scroll-mt-20">
            <div ref={headingRef} className="flex flex-col items-center mb-12 fade-in-up">
                <h1 className="text-6xl font-bold text-center">
                    <span className="text-[#1F2937]">Everything you need for</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#8E2424] to-[#711C1C] bg-clip-text text-transparent">
                        Modern Education
                    </span>
                </h1>
                <span className="block text-xl font-normal text-[#4A4D60] max-w-[600px] mt-5 text-center">
                    Powerful tools and features designed to streamline your teaching workflow and enhance student engagement.
                </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-8xl">
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><ImportContactsOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">Digital Assignments</span>
                        <span className="text-[#4A4D60] text-center">Create, distribute, and grade assignments seamlessly with our intuitive interface.</span>
                    </div>
                </div>
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><PeopleAltOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">Class Management</span>
                        <span className="text-[#4A4D60] text-center">Organize your students, track progress, and manage multiple classes effortlessly.</span>
                    </div>
                </div>
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><SmartToyOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">AI Study Assistant</span>
                        <span className="text-[#4A4D60] text-center">AI creates reviewers and quizzes to help students study and professors assess.</span>
                    </div>
                </div>
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 mt-10 mb-10 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><DateRangeOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">Smart Scheduling</span>
                        <span className="text-[#4A4D60] text-center">Plan lessons, set deadlines, and never miss important dates with our calendar system.</span>
                    </div>
                </div>
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 mt-10 mb-10 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><MilitaryTechOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">Progress Tracking</span>
                        <span className="text-[#4A4D60] text-center">Monitor student performance with detailed analytics and personalized insights.</span>
                    </div>
                </div>
                <div className="transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl h-40 mt-10 mb-10 cursor-pointer">
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-100 mb-8 max-h-60 fade-in-up">
                        <span className='mb-2'><PublicOutlinedIcon fontSize='large'/></span>
                        <span className="text-xl font-bold mb-2">Global Accessibility</span>
                        <span className="text-[#4A4D60] text-center">Access your classroom from anywhere, on any device, at any time.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}