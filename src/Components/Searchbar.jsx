import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { useLocation } from 'react-router-dom';
import searchpinky from '../assets/searchpinky.png'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(Musiccontext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    
    useEffect(() => {
        if (location.pathname.includes('music') || location.pathname.includes('merch')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className='border-t border-b bg-pink-50/30 text-center py-4 px-5'>
            <div className='inline-flex items-center justify-center border border-pink-200 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm'>
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search...' 
                />
                <img src={searchpinky} className='w-5 h-5 opacity-70' alt="search icon" />
        
            </div>
            <span 
                onClick={() => setShowSearch(false)} 
                className='inline w-3 cursor-pointer text-gray-500 font-bold ml-2 hover:text-pink-600'
            >
                X
            </span>
        </div>
    ) : null;
};

export default SearchBar; 