import React, { useState } from 'react';
import { useContext } from 'react';
import {Artiscontext} from '../Context/Artiscontext';
import { useEffect } from 'react';

const Artis = () => {
  const {artisdata} = useContext(Artiscontext);
  const [filterArtist, setFilterArtis]=useState([]);
  const [genre, setGenre] =useState('');

  const applyFilter = () => {
    if (!artisdata) return;

    let artiscopy = [...artisdata]; 

   
    if (genre !== '') {
      artiscopy = artiscopy.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
    }

    setFilterArtis(artiscopy);
  };

  
  useEffect(() => {
    applyFilter();
  }, [genre, artisdata]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-pink-200 pb-10 px-5'>

      {/* filter options */}
      <div className='w-full sm:w-1/4'>
        <h2 className='font-black text-2xl text-[#880E4F] mb-6'>Filter By</h2>
        
        
        <select 
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className='w-full p-2 border border-pink-300 rounded-lg outline-none focus:ring-2 focus:ring-pink-500 text-pink-600'
        >
          <option value="">All Genre</option>
          <option value="pop">Pop</option>
          <option value="mpop">Mpop</option>
          <option value="kpop">Kpop</option>
          <option value="m-90s">M-90s</option>
        </select>
      </div>
    
      {/* Right side - Artis List */}
      <div className='flex-1'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-[#880E4F] font-black text-2xl uppercase tracking-tighter'>
            {genre === '' ? 'Artist' : `${genre} Artis`}
          </h1>
        </div>

        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {filterArtist.map((item) => (
            <div key={item.id} className='group cursor-pointer'>
              <div className='overflow-hidden rounded-2xl aspect-[3/4] border-2 border-pink-50 shadow-sm'>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out' 
                />
              </div>
              <div className='mt-4 text-center'>
                <p className='text-[10px] text-pink-400 font-bold uppercase mb-1'>{item.genre}</p>
                <h3 className='font-black text-[#880E4F] uppercase text-sm group-hover:text-pink-600 transition-colors'>
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artis;