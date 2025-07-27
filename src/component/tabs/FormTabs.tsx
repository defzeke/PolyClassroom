"use client";

import { useRef, useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { supabase } from '../../../lib/supabaseClient';

export default function FormTabs() {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.classList.add("visible");
        }
    }, []);

    const [activeTab, setActiveTab] = useState("signin");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupSuccess, setSignupSuccess] = useState("");

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const { error } = await supabase.auth.signUp({
            email,
            password, 
            options: { data: { name } }
        });
        
        if (error) {
            alert(error.message);
        } else {
            alert("Registration successful! Please check your email for a verification link or OTP.");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (!data.user?.email_confirmed_at) {
            alert("Please verify your email before logging in.")
            return;
        }

        await supabase.auth.updateUser({
            data: { name }
        });

        const { error: upsertError } = await supabase.from("profiles").upsert([
            {
                id: data.user.id,
                email: data.user.email,
                name: data.user.user_metadata.name,
            }
        ]);

        if (upsertError) {
            alert("Error saving user profile: " + upsertError.message);
        } else { 
            alert("Login successful!")
        }
    };
    

    
    return(
        <>
        <div ref={formRef} className="w-[550px] h-[600px] bg-[#FEFEFE] rounded-xl shadow-2xl p-0 mx-0 form-fade-blur">
            
            <div className="flex flex-col items-center mt-6">
                <img draggable="false" className="w-18 h-18" src="./polyclass.svg" />
                <p className="text-[#791E1E] font-bold text-2xl mt-2">PolyClassroom</p>
                <p className="text-[#4B5574] text-xs">Your digital classroom awaits</p>
            </div>

            <div className="flex w-[90%] mx-auto bg-[#F4F7FA] rounded-xl mt-3 p-1">
                <button
                    className={`flex-1 py-0 rounded-lg font-semibold text-lg transition 
                        ${activeTab === "signin" ? "bg-white text-[#1F2937] shadow" : "bg-transparent text-[#64748B]"}`}
                    onClick={() => setActiveTab("signin")}
                >
                    Sign In
                </button>
                <button
                    className={`flex-1 py-0 rounded-lg font-semibold text-lg transition 
                        ${activeTab === "signup" ? "bg-white text-[#1F2937] shadow" : "bg-transparent text-[#64748B] "}`}
                    onClick={() => setActiveTab("signup")}
                >
                    Sign Up
                </button>
            </div>

            <div className="flex flex-col mt-0">
                {activeTab === "signin" ? (
                    <>
                        <form onSubmit={handleSignIn}>
                            <div className="mt-3">
                                <p className="ml-6 font-semibold text-base">Email</p>
                                <div className='relative'>
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-10 pt-2'>
                                        <EmailIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="ml-6 font-semibold text-base">Password</p>
                                <div className='relative'>
                                    <span className='absolute inset-y-0 flex items-center pl-10 pt-2'>
                                        <LockIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input type='password' className="outline rounded w-125 px-13 py-2 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required/>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center ml-6 mt-5">
                                <input type="checkbox" id="remember" className="w-4 h-4 cursor-pointer"></input>
                                <label htmlFor="remember" className="cursor-pointer text-[#8490A3]">Remember me</label>
                            </div>

                            <div className='flex justify-center mt-6'>
                                <button className='outline rounded bg-gradient-to-r from-[#942E2E] to-[#B06262] text-white font-bold px-56 py-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 cursor-pointer'>Sign In</button>
                            </div>
                        </form>

                        <div className='flex justify-center mt-4'>
                            <a className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300 text-sm'>Forgot your password?</a>
                        </div>

                        <div className='flex justify-center mt-6 text-sm'>
                            <p className='text-[#8490A3]'>By continuing, you agree to our 
                                <span className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Terms of Service</span> and 
                                <span className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Privacy Policy</span>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={handleSignUp}>
                            <div className="mt-6">
                                <p className="ml-6 -mt-4 font-semibold text-base">Create Account</p>
                                <div className='relative'>
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-10 pt-2'>
                                        <PersonIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required/>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className='relative'>
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-10 pt-2'>
                                        <EmailIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required/>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className='relative'>
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-10 pt-2'>
                                        <LockIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input type="password" className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Create your password" required/>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className='relative'>
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-10 pt-2'>
                                        <LockIcon fontSize='small' className='text-[#9CA3AF]'/>
                                    </span>
                                    <input type="password" className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm password" required/>
                                </div>
                            </div>

                            <div className='flex justify-center mt-5'>
                                <button type="submit" className='outline rounded bg-gradient-to-r from-[#942E2E] to-[#B06262] text-white font-bold px-56 py-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 cursor-pointer'>Sign Up</button>
                            </div>
                        </form>

                        <div className='flex justify-center mt-6 text-sm'>
                            <p className='text-[#8490A3]'>By continuing, you agree to our 
                                <span className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Terms of Service</span> and 
                                <span className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Privacy Policy</span>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
        </>
    );
}