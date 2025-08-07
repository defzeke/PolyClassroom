"use client";

import { useRef, useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation'
import PrivacyPolicy from '../ui/PrivacyPolicy'
import Terms from '../ui/TermsOfService'


export default function FormTabs() {
    const router = useRouter();

    const formRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (formRef.current) {
            formRef.current.classList.add("visible");
        }

        // Listen for custom event to open signup tab and focus name input
        const handleSignup = () => {
            setActiveTab("signup");
            setTimeout(() => {
                const nameInput = document.getElementById("signup-name");
                if (nameInput) (nameInput as HTMLInputElement).focus();
            }, 100);
        };

        // Listen for custom event to open signin tab and focus email input
        const handleSignin = () => {
            setActiveTab("signin");
            setTimeout(() => {
                const emailInput = document.getElementById("signin-email");
                if (emailInput) (emailInput as HTMLInputElement).focus();
            }, 100);
        };
        window.addEventListener("open-signup", handleSignup);
        window.addEventListener("open-signin", handleSignin);
        return () => {
            window.removeEventListener("open-signup", handleSignup);
            window.removeEventListener("open-signin", handleSignin);
        };
    }, []);


    const [activeTab, setActiveTab] = useState("signin");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPolicy, setShowPolicy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name })
            });
            const result = await response.json();
            if (!response.ok) {
                alert(result.error || "Sign up failed.");
            } else {
                alert(result.message || "Registration successful! Please check your email for a verification link or OTP.");
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
        } catch (err) {
            alert("An error occurred during sign up.");
        }
    };


    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();
            if (!response.ok) {
                alert(result.error || "Sign in failed.");
            } else {
                router.push("/Home");
            }
        } catch (err) {
            alert("An error occurred during sign in.");
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
                                    <input id="signin-email" className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
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
                            <a onClick={() => {
                                router.push("/ForgotPassword")
                            }} className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300 text-sm'>Forgot your password?</a>
                        </div>

                        <div className='flex justify-center mt-6 text-sm'>
                            <p className='text-[#8490A3]'>By continuing, you agree to our 
                                <span onClick={() => setShowTerms(true)} className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Terms of Service</span> and 
                                <span onClick={() => setShowPolicy(true)} className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Privacy Policy</span>
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
                                    <input id="signup-name" className="outline rounded w-125 px-13 py-3 ml-6 mt-2 outline-[#E2E8F0] placeholder:text-[#8490A3] placeholder:text-sm placeholder:font-semibold text-sm" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required/>
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
                                <span onClick={() => setShowTerms(true)} className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Terms of Service</span> and 
                                <span onClick={() => setShowPolicy(true)} className='text-[#942E2E] cursor-pointer hover:text-[#CD5D5D] transition-all duration-300'> Privacy Policy</span>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
        <PrivacyPolicy open={showPolicy} onClose={() => setShowPolicy(false)} title="Privacy Policy">
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-semibold">Introduction</h3>
            <p>
              PolyClassroom is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your information when you use our services.
            </p>
            <h3 className="text-lg font-semibold mt-4">1. Information We Collect</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <span className="font-semibold">Personal Information:</span> <br />
                We collect personal information such as your email address and login credentials through Supabase Authentication when you create an account or sign in.
              </li>
              <li>
                <span className="font-semibold">Usage Data:</span> <br />
                We collect non-personally identifiable data related to how you use the app, including course progress and reviewer activity, to improve functionality and user experience.
              </li>
              <li>
                <span className="font-semibold">AI Interaction Data:</span> <br />
                Inputs provided to AI-powered features (e.g., material review tools or learning assistance) may be collected in anonymized form for performance improvement and feature development.
              </li>
            </ol>

            <h3 className="text-lg font-semibold mt-4">2. How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Authenticate and manage user accounts</li>
              <li>Deliver course materials and AI-generated content</li>
              <li>Personalize your learning experience</li>
              <li>Improve app features and AI performance</li>
              <li>Communicate updates and support messages</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">3. Data Storage and Security</h3>
            <p>
              All data is stored and managed securely through Supabase, which uses modern encryption and security best practices. We do not sell or share your personal data with third parties, except as required by law.
            </p>

            <h3 className="text-lg font-semibold mt-4">4. Your Rights</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access, update, or delete your personal information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of certain non-essential data collection features</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">5. Third-Party Services</h3>
            <p>
              We may integrate with third-party services (e.g., OpenAI) to provide AI features. These services may process anonymized user input strictly for functionality purposes. All integrations comply with relevant data protection regulations.
            </p>
          </div>
        </PrivacyPolicy>

        <Terms open={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
          <div className="space-y-4 text-gray-700">
            <h3 className="text-lg font-semibold">Welcome to PolyClassroom</h3>
            <p>
              These Terms of Service ("Terms") govern your access to and use of our platform, services, and features ("Service"). By using PolyClassroom, you agree to these Terms.
            </p>

            <h3 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h3>
            <p>
              By creating an account or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>

            <h3 className="text-lg font-semibold mt-4">2. User Accounts</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <span className="font-semibold">Account Creation:</span> You are required to sign in via Supabase Authentication using a valid email address. You are responsible for maintaining the confidentiality of your credentials.
              </li>
              <li>
                <span className="font-semibold">Account Responsibility:</span> You agree to use your account only for lawful, educational purposes and not to impersonate others or share your login with unauthorized users.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">3. Use of the Service</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <span className="font-semibold">Educational Use:</span> PolyClassroom is designed for academic purposes such as classroom management, course content delivery, and AI-powered review tools.
              </li>
              <li>
                <span className="font-semibold">Prohibited Activities:</span>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Use the service for any unlawful or harmful purpose</li>
                  <li>Attempt to interfere with the platform’s operation</li>
                  <li>Upload malicious code, spam, or harmful content</li>
                  <li>Reverse-engineer or tamper with the app’s code or backend systems</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">4. AI-Powered Features</h3>
            <p>
              PolyClassroom may provide content or feedback generated by artificial intelligence. These outputs are provided for informational and educational use only and should not be treated as professional advice.
            </p>

            <h3 className="text-lg font-semibold mt-4">5. Intellectual Property</h3>
            <p>
              All content, code, and materials provided within the app are the property of PolyClassroom or its licensors. You may not copy, redistribute, or reuse any part of the platform without written permission.
            </p>

            <h3 className="text-lg font-semibold mt-4">6. Termination</h3>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time if you violate these Terms or misuse the platform.
            </p>

            <h3 className="text-lg font-semibold mt-4">7. Limitation of Liability</h3>
            <p>
              PolyClassroom is provided "as is" without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Service.
            </p>

            <h3 className="text-lg font-semibold mt-4">8. Changes to Terms</h3>
            <p>
              We may modify these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the new Terms.
            </p>
          </div>
        </Terms>
        </>
    );
}