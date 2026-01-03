import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Music = () => {
  
  const { musicItem, addToCart, search, showSearch } = useContext(Musiccontext);
  
  const [showFilter, setShowFilter] = useState(false);
  const [filterMusic, setFilterMusic] = useState([]);
  const [category, setCategory] = useState([]); 

  // Function handle checkbox
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  
  const applyFilter = () => {
    let musicCopy = [...musicItem];

    
    if (showSearch && search) {
      musicCopy = musicCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.artis.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 2. Category Filter
    if (category.length > 0) {
      musicCopy = musicCopy.filter(item => category.includes(item.category));
    }

    setFilterMusic(musicCopy);
  };

  
  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, musicItem]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-pink-200 px-5 bg-[#FFF5F7] min-h-screen'>
      
      {/* Sidebar Filter */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer font-black text-[#880E4F] uppercase'>
          Filters
          <span className={`sm:hidden ml-2 ${showFilter ? 'rotate-90' : ''}`}> {'>'} </span>
        </p>

        <div className={`border border-pink-200 pl-5 py-3 mt-6 bg-white rounded-xl ${showFilter ? '' : 'hidden'} sm:block shadow-sm`}>
          <p className='mb-3 text-sm font-bold text-pink-600 uppercase'>Categories</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700'>
            <p className='flex gap-2'><input type="checkbox" value={'Vinyl'} onChange={toggleCategory} /> Vinyl</p>
            <p className='flex gap-2'><input type="checkbox" value={'CD'} onChange={toggleCategory} /> CD</p>
            <p className='flex gap-2'><input type="checkbox" value={'Album'} onChange={toggleCategory} /> Album</p>
          </div>
        </div>
      </div>

      {/* Music Grid Section */}
      <div className='flex-1'>
        <div className='flex justify-between items-center mb-6'>
            <h1 className='text-[#880E4F] font-black text-2xl uppercase'>Music Collection</h1>
            {showSearch && search && <p className='text-sm text-pink-400 italic'>Showing results for "{search}"</p>}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterMusic.length > 0 ? (
            filterMusic.map((item) => (
              <div key={item._id} className='group flex flex-col bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition'>
                <div className='relative overflow-hidden rounded-xl aspect-square border border-pink-50'>
                  <Link to={`/product/${item._id}`}>
                    <img src={item.image[0]} alt={item.name} className='w-full h-full object-cover group-hover:scale-110 transition duration-500' />
                  </Link>
                  <button onClick={() => addToCart(item._id)} className='absolute bottom-2 right-2 bg-[#880E4F] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600 transition shadow-lg font-bold'>+</button>
                </div>
                <div className='mt-3 text-center'>
                  <p className='text-[10px] text-pink-400 font-bold uppercase'>{item.artis}</p>
                  <h3 className='font-black text-[#880E4F] text-sm uppercase truncate px-2'>{item.name}</h3>
                  <p className='font-bold text-gray-600 font-mono'>RM{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full text-center py-20 text-gray-400 italic'>
                No music collection found. Try a different search!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;