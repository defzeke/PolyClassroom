"use client";

import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useEffect , useRef } from 'react';


export default function Contacts() {

    return(
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full bg-[#FCF0F0] px-8 py-12">
                <div id="contacts" className="flex flex-row items-center justify-center gap-8 w-full scroll-mt-3">
                    <div className="flex flex-col bg-white h-200 w-250 rounded-xl shadow-xl">
                        <span className="flex justify-center items-center font-bold text-[32px] mt-12 gap-5 align-center text-[#232A3B]"><QuestionAnswerIcon fontSize='large' className='mt-2'/>Start The Conversation</span>

                        <form>
                            <div className='flex flex-row gap-5 items-center justify-center mt-3'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <p className='font-semibold text-[#232A3B] ml-10 mt-5'>First Name *</p>
                                    <input type='text' className='w-100 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424]' placeholder='Enter your first name' required></input>
                                </div>

                                <div className='flex flex-col gap-2 items-center'>
                                    <p className='font-semibold text-[#232A3B] ml-10 mt-5'>Last Name *</p>
                                    <input type='text' className='w-100 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424]' placeholder='Enter your last name' required></input>
                                </div>
                            </div>    

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <p className='font-semibold text-[#232A3B] ml-10 mt-5'>Email Address *</p>
                                <input type='email' className='w-205 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424]' placeholder='your.email@school.edu' required></input>

                                <p className='font-semibold text-[#232A3B] ml-10 mt-5'>School/Organization *</p>
                                <input type='text' className='w-205 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424]' placeholder='Your institution name' required></input>

                                <p className='font-semibold text-[#232A3B] ml-10 mt-5'>Your Role *</p>
                                <input type='text' className='w-205 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424]' placeholder='Teacher, Administrator, IT Director, etc.' required></input>

                                <p className='font-semibold text-[#232A3B] ml-10 mt-5'>How can we help? *</p>
                                <textarea
                                    className='w-205 outline-[1] py-2 px-2 rounded-sm outline-gray-400 focus:outline-[2] focus:outline-[#8E2424] resize-none' placeholder='Tell us about your education goals, challenges, or questions about our platform...'
                                    required>
                                </textarea>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' className='mt-10 bg-[#8E2424] p-3 rounded-sm w-205 font-bold text-white'>Send Message & Get Started <ArrowForwardIcon fontSize='small'/> </button>
                            </div>

                        </form>
                    </div>

                    <div className="flex flex-col gap-7">
                        <div className="h-62 w-62 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 gap-2">
                            <CallIcon fontSize="large" className="text-[#8E2424] mb-2" />
                            <span className="font-semibold text-lg text-[#232A3B]">Call Us Now</span>
                            <span className="text-md text-[#232A3B]">+1 (555) 123-4567</span>
                            <span className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</span>
                            <button className="mt-3 bg-[#8E2424] text-white px-4 py-2 rounded hover:bg-[#711C1C] transition font-semibold">Schedule Call</button>
                        </div>

                        <div className="h-62 w-62 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 gap-2">
                            <ChatIcon fontSize="large" className="text-[#8E2424] mb-2" />
                            <span className="font-semibold text-lg text-[#232A3B]">Chat With Us</span>
                            <span className="text-md text-[#232A3B]">+1 (555) 123-4567</span>
                            <span className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</span>
                            <button className="mt-3 bg-[#8E2424] text-white px-4 py-2 rounded hover:bg-[#711C1C] transition font-semibold">Start Chat</button>
                        </div>
                        
                        <div className="h-62 w-62 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 gap-2">
                            <DateRangeIcon fontSize="large" className="text-[#8E2424] mb-2" />
                            <span className="font-semibold text-lg text-[#232A3B]">Book a Meeting</span>
                            <span className="text-md text-[#232A3B]">+1 (555) 123-4567</span>
                            <span className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</span>
                            <button className="mt-3 bg-[#8E2424] text-white px-4 py-2 rounded hover:bg-[#711C1C] transition font-semibold">Schedule Meeting</button>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center items-center mt-8 w-full">
                    <div className="bg-[#fff] rounded-xl shadow-xl p-10 w-full max-w-7xl">
                        <div className="flex flex-row justify-center items-start w-full gap-16">
                            <div className="flex flex-col items-center w-1/2 -mt-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-[#8E2424] -ml-50' fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='12' cy='12' r='10' strokeWidth='2' /><circle cx='12' cy='12' r='4' strokeWidth='2' /></svg>
                                    <h2 className="font-bold text-3xl text-[#232A3B]">PUP Main Campus</h2>
                                </div>
                                <span className="font-bold text-lg mb-2 mt-5">Office Location</span>
                                <span className="text-[#6B7280] text-md">Polytechnic University of the Philippines</span>
                                <span className="text-[#6B7280] text-md">Anonas St., Sta. Mesa</span>
                                <span className="text-[#6B7280] text-md">Manila, Philippines 1016</span>
                            </div>
                            <div className="flex flex-col items-center w-1/2 mt-13">
                                <span className="font-bold text-lg mb-2">Email Support</span>
                                <a className="text-[#8E2424] text-md font-medium hover:underline" href="mailto:help@pup.edu.ph">help@pup.edu.ph</a>
                                <a className="text-[#8E2424] text-md font-medium hover:underline" href="mailto:support@pup.edu.ph">support@pup.edu.ph</a>
                                <span className="text-[#6B7280] text-sm mt-2">PUP support available during office hours</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}