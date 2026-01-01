import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { useState } from 'react';

const Music = () => {

  const {musicItem,addToCart} = useContext(Musiccontext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterMusic, setFilterMusic]=useState([]);
  const [category, setCategory] =useState([]);

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value))
    {
      setCategory(prev=> prev.filter(item=> item !==e.target.value))
    }
    else
    {
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  useEffect(()=>{
    if (musicItem && musicItem.length > 0) {
      let musicCopy = [...musicItem];
    if(category.length>0){
      musicCopy=musicCopy.filter(item=> category.includes(item.category));
    }
    setFilterMusic(musicCopy);}
  }, [category, musicItem]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-pink-200 px-5'>
      
      {/* Sidebar Filter */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer font-black text-[#880E4F]'>
          FILTERS
          <span className={`sm:hidden ml-2 ${showFilter ? 'rotate-90' : ''}`}> {'>'} </span>
        </p>

        {/* Category Filter Box */}
        <div className={`border border-pink-200 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold text-pink-600'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Vinyl'} onChange={toggleCategory} /> Vinyl
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CD'} onChange={toggleCategory} /> CD
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Album'} onChange={toggleCategory} /> Album
            </p>
          </div>
        </div>
      </div>

      {/* Music Display Area */}
      <div className='flex-1'>
        <h1 className='text-[#880E4F] font-black text-2xl mb-6 uppercase'>Music Collection</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterMusic.map((item) => (
            <div key={item._id} className='group cursor-pointer'>
              <div className='overflow-hidden rounded-2xl aspect-square border-2 border-pink-50 shadow-sm'>
                <img src={item.image[0]} alt={item.name} className='w-full h-full object-cover group-hover:scale-110 transition duration-500' />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-[10px] text-pink-400 font-bold uppercase'>{item.artis}</p>
                <h3 className='font-black text-[#880E4F] text-sm uppercase truncate'>{item.name}</h3>
                <p className='font-bold text-gray-600'>RM{item.price}</p>
                {/* Butang Add to Cart */}
                  <button 
                    onClick={() => addToCart(item._id)}
                    className='bg-[#880E4F] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-pink-600 transition shadow-md font-bold'
                  >+
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Music;