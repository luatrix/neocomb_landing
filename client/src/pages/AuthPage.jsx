import React, { useState } from 'react';
import '../styles/AuthPage.css';

export default function AuthPage() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a0f0c0] via-[#c7f9e5] to-[#83e4d3]
 font-baloo">
            <div className="w-[360px] perspective">
                <div
                    className={`relative w-full min-h-[620px] transition-transform duration-700 transform-style preserve-3d ${flipped ? 'rotate-y-180' : ''
                        }`}
                >

                    {/* Sign In */}
                    <div className="absolute w-full backface-hidden bg-white rounded-2xl shadow-xl flex flex-col px-6 py-8">
                        <div className="flex flex-col items-center mb-6">
                            <img src="/assets/logo.png" alt="ThumBee" className="w-28 mb-3" />
                            <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                        </div>

                        <input type="email" placeholder="Email address" className="input mb-4" />
                        <input type="password" placeholder="Password" className="input mb-4" />

                        <p className="text-xs text-gray-400 text-center mb-4">
                            By signing up or logging in, you consent to ThumBee’s{' '}
                            <span className="underline cursor-pointer">Terms of Use</span> and{' '}
                            <span className="underline cursor-pointer">Privacy Policy</span>.
                        </p>

                        <button className="btn-primary w-full mb-3">Log in</button>

                        <div className="flex justify-between text-sm text-blue-500 font-semibold px-1 mb-6">
                            <span className="cursor-pointer">Forgot password?</span>
                            <span className="cursor-pointer" onClick={() => setFlipped(true)}>
                                Sign up
                            </span>
                        </div>

                        <div className="flex items-center justify-center mb-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="text-sm text-gray-400 px-3">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        <button className="btn-outline w-full">
                            <img src="/assets/google-icon.svg" alt="Google" className="w-5 h-5 inline mr-2" />
                            Log in with Google
                        </button>
                    </div>

                    {/* Sign Up */}
                    <div className="absolute w-full backface-hidden bg-white rounded-2xl shadow-xl transform rotate-y-180 flex flex-col px-6 py-8">
                        <div className="flex flex-col items-center mb-6">
                            <img src="/assets/logo.png" alt="ThumBee" className="w-28 mb-3" />
                            <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                        </div>

                        <input type="email" placeholder="Email address" className="input mb-4" />
                        <input type="password" placeholder="Password" className="input mb-4" />
                        <input type="password" placeholder="Confirm password" className="input mb-4" />

                        <p className="text-xs text-gray-400 text-center mb-4">
                            By signing up, you consent to ThumBee’s{' '}
                            <span className="underline cursor-pointer">Terms of Use</span> and{' '}
                            <span className="underline cursor-pointer">Privacy Policy</span>.
                        </p>

                        <button className="btn-primary w-full mb-6">Sign up</button>

                        <div className="flex items-center justify-center mb-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="text-sm text-gray-400 px-3">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        <button className="btn-outline w-full mb-4">
                            <img src="/assets/google-icon.svg" alt="Google" className="w-5 h-5 inline mr-2" />
                            Sign up with Google
                        </button>

                        <p className="text-sm text-blue-500 font-semibold text-center cursor-pointer" onClick={() => setFlipped(false)}>
                            Log in
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
