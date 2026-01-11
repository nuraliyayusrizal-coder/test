import React from "react";  
import logo from "../assets/logo.png";

const Footer = () => {
    return (
      
        <footer className='mt-40 pb-16 px-4'>
            
            <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD1DC] to-transparent mb-20'></div>
            
            <div className='flex flex-col md:grid grid-cols-[2fr_1fr_1.5fr] gap-16 text-sm'>
                
                {/*  Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} className='w-28 mb-4 hover:rotate-6 transition-transform' alt="Logo" />
                
                
                <p className="text-3xl font-bold text-[#880E4F] italic">
                 "Where the precision of the Algorithm <br /> meets the soul of the Rhythm."  </p>
                </div> 

                {/*gap*/}
                <div className="flex flex-col items-center md:items-start">
                    </div>

                {/*  subscribe box for active customer*/}
                <div className="bg-[#FFC1CC]/30 p-8 rounded-[2.5rem] border border-[#FFD1DC] shadow-inner">
                    <h3 className='font-black text-[#880E4F] uppercase tracking-widest mb-2'>The Beat List</h3>
                    <p className='text-[#D87093] mb-4 text-[10px] font-bold uppercase tracking-tight'>Get synced with our latest drops</p>
                    <div className="flex flex-col gap-3">
                        <input 
                            type="email" 
                            placeholder="Sync your email..." 
                            className="w-full p-3 bg-white/80 border border-[#FFD1DC] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C2185B] text-[#880E4F] placeholder:text-[#D87093]/40 transition-all text-xs" 
                        />
                        <button className="w-full bg-[#C2185B] text-white font-black py-3 rounded-2xl hover:bg-[#880E4F] transition-all shadow-lg active:scale-95 text-xs tracking-widest">
                            JOIN THE FAMILY 
                        </button>
                    </div>
                </div>
            </div>

            {/* Algorythm beats credit */}
            <div className="mt-24 text-center">
                <p className="text-[9px] font-bold text-[#D87093] tracking-[0.5em] uppercase opacity-50">
                    ALGORYTHM BEATS © 2026 • ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    );
}

export default Footer; 