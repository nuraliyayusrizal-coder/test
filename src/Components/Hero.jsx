import React, { useEffect, useState } from "react";
import vinyl from "../assets/vinyl.mp4";
import top_album from "../assets/top_album.png";
import arianagrande from "../assets/arianagrande.jpg";
import bphero from "../assets/bphero.jpg";

const Hero = () => {
    //To store tracks from MySQL
    const [tracks, setTracks] = useState([]);

    
    return (
       <div className="flex flex-col gap-20">
        {/* hero section */}
        <div className='flex flex-col sm:flex-row border-border-[#FFD1DC] rounded-[2.5rem] overflow-hidden bg-[#FFC1CC] shadow-2xl transition-all duration-500'>
        {/*left side */}
            <div className='sm:w-1/2  flex items-center justify-center p-12 sm:p-28'>
            <div className='text-[#880E4f]'>
               <div className='flex items-center gap-2 mb-4'>
                        <p className='w-10 h-[3px] bg-[#C2185B] shadow-[0_0_10px_#C2185B]'></p>
                        <p className='font-bold text-xs md:text-sm uppercase tracking-[0.2em]'>Exclusive Drop</p> 
                    </div>
                    
                    <h1 className='text-4xl lg:text-7xl font-black leading-tight text-[#C2185B]'>
                        THE <br /> MERCH
                    </h1>
                    
                    <p className='mt-4 text-[#D87093] font-medium max-w-xs'> Limited edition vinyl,CD & many more.</p>

                    <div className='flex items-center gap-3 mt-8 cursor-pointer group'>
                        <p className='font-black text-sm md:text-base uppercase tracking-widest'>Shop Now!</p>
                        <div className='w-10 h-[2px] bg-[#C2185B] group-hover:w-20 transition-all duration-500'>

                        </div>
                    </div>
                    </div>
            </div>

            {/* right side :  video vinyl*/}
            <div className='w-full sm:w-1/2 bg-black/10 flex items-center justify-center relative'>
                <video
                    className='w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={vinyl} type="video/mp4" />
                </video>
                
                <div className='absolute inset-0 bg-pink-500/10 mix-blend-overlay pointer-events-none'>
                </div>
            </div>
        </div>

        {/* Top album section */}
        <div className='my-20 px-4'>
     
        <div className='relative overflow-hidden bg-white/30 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12'>
        
      
        <div className='absolute -top-20 -right-20 w-80 h-80 bg-[#FFC1CC] rounded-full blur-[120px] opacity-50 pointer-events-none'>
          </div>

        {/*side kiri : image album */}
        <div className='relative z-10 w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group'>
          <div className='absolute inset-0 bg-[#C2185B] rounded-2xl rotate-6 group-hover:rotate-0 transition-all duration-500 opacity-20'>
          </div>
          <img src={top_album} alt="Born Pink Album"  className='w-full h-full object-cover rounded-2xl shadow-2xl group-hover:-translate-y-2 transition-all duration-500'  />
        </div>

        {/* side tengah : Info Album & Spotify Player*/}
        <div className='relative z-10 flex-1 text-center lg:text-left'>
          <p className='text-[#C2185B] font-black tracking-[0.4em] text-xs uppercase mb-3'> Top Album : BLACKPINK</p>
          <h2 className='text-5xl md:text-7xl font-black text-[#880E4F] italic leading-none'>
            BORN <span className='text-[#C2185B]'>PINK</span>
          </h2>
          <p className='mt-4 text-[#D87093] font-medium max-w-lg'>Turn it up with BORN PINK! From the addictive beats of “Pink Venom” to the bold vibes of “Shut Down” </p>

          {/* Spotify Embedded Player */}
           
         <div className="mt-8 max-w-xl">
           <iframe
           src="https://open.spotify.com/embed/album/0S4pP8MBY9p7ngFWIZQAJv?theme=0"
           width="100%"
           height="352"
           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
           loading="lazy"
           className="rounded-xl shadow-xl" />
          <div className='absolute right-0 bottom-0 w-[430px] opacity-90'>
          <img src={bphero} className='[mask-image:linear-gradient(to_top,transparent,black_50%)]' />

            </div>
          </div>
        </div>
        </div>
        </div>
     
    {/* Database Beats Section */}
        <div className='my-24 px-4 max-w-7xl mx-auto w-full'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-4xl font-black text-[#C2185B] uppercase italic'>
                    Latest <span className='text-[#880E4F]'>Beats</span>
                </h2>
                <div className='flex-1 h-[2px] bg-[#FFD1DC]'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {tracks.length > 0 ? (
                    tracks.map((track) => (
                        <div key={track.id} className='bg-white/40 backdrop-blur-md p-6 rounded-[2.5rem] ...'>
                            {/* Track details: title, bpm, price */}
                        </div>
                    ))
                ) : (
                    <p className="text-[#D87093]">Loading beats from database...</p>
                )}
            </div>
        </div> 

     {/* artis spotlight : Ariana grande */}
     <div className='my-24 flex flex-col items-center'>
    
    <div className='text-center mb-10'>
        <p className='text-[#D87093] font-bold tracking-[0.5em] text-xs uppercase mb-2'>Artist Spotlight</p>
        <h2 className='text-5xl md:text-7xl font-black text-[#C2185B]'>Ariana Grande</h2>
    </div>

    {/*ariana grande image*/}
    <div className='relative w-full max-w-5xl h-[300px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(194,24,91,0.2)] border-4 border-[#FFD1DC]'>
        <img 
            src={arianagrande} className='w-full h-full object-cover hover:scale-105 transition-all duration-700' alt=""  />

        <div className='absolute inset-0 bg-gradient-to-t from-[#FFC1CC]/40 to-transparent pointer-events-none'>
        </div>
    </div>

        </div>
      </div>

    )
}

export default Hero; 