//to display merch context
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Merchcontext } from '../Context/Merchcontext';
import { Musiccontext } from '../Context/Musiccontext'; 
import { Link } from 'react-router-dom';
const Merch = () => {
  // to use merch data 
  const { merchItem, currency, addToCart } = useContext(Merchcontext);
  const { search, showSearch } = useContext(Musiccontext);
  //state to filter merch
  const [filterMerch, setFilterMerch] = useState([]);
    //to apply show search filter 
    useEffect(() => {
        let merchCopy = [...merchItem];

        if (showSearch && search) {
            merchCopy = merchCopy.filter(item => 
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                (item.artis && item.artis.toLowerCase().includes(search.toLowerCase()))
            );
        }

        setFilterMerch(merchCopy);
    }, [search, showSearch, merchItem]);
  return (
    <div className='pt-10 border-t border-pink-200 px-5'>
      
      {/*title */}
      <div className='text-center mb-10'>
        <h1 className='text-[#880E4F] font-black text-3xl uppercase tracking-tighter'>Official Merchandise</h1>
        <p className='text-pink-400 text-sm font-medium'>Exclusive collection for the real fans</p>
      </div>

      {/* to display merch by grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10'>
       {filterMerch.map((item) => (
          <div key={item._id} className='group'>
            
            {/* Merch */}
            <Link to={`/product/${item._id}`} className='cursor-pointer'>
             <div className='overflow-hidden rounded-2xl aspect-square border-2 border-pink-50 shadow-sm relative'>
              <img 
                src={item.image[0]} 
                alt={item.name} 
                className='w-full h-full object-cover group-hover:scale-110 transition duration-500' 
              />
              {/* category part */}
              <p className='absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm text-[10px] px-2 py-1 rounded shadow-sm font-bold text-[#880E4F]'>
                {item.category}
              </p>
            </div>
            </Link>
            {/* Info Merch */}
            <div className='mt-3 text-center'>
              <p className='text-[10px] text-pink-400 font-bold uppercase tracking-widest'>{item.artis}</p>
              <h3 className='font-black text-[#880E4F] text-sm uppercase truncate'>{item.name}</h3>
                <p className='font-bold text-gray-600'>{currency}{item.price}</p>
                </div>
            
            <div className='flex justify-center items-center gap-3 mt-2'></div>
                {/* Button Add to Cart */}
                <button 
               
                  onClick={() => addToCart(item._id)}
                  className='bg-[#880E4F] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-pink-600 transition shadow-md font-bold'
                >
                  +
                </button>
              </div>
       
        ))}
      </div>
      
      {/* Simple Footer when no merch available */}
      {merchItem.length === 0 && (
        <p className='text-center py-20 text-gray-400'>No merchandise available at the moment.</p>
      )} 
    </div>
  );
};

export default Merch; 