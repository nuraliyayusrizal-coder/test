import React, {useState} from 'react';
import logo from '../assets/logo.png';
import searchpinky from '../assets/searchpinky.png';
import profilepinky from '../assets/profilepinky.png';
import cart from '../assets/cart.png';
import menu from '../assets/menu.png';
import drop from '../assets/drop.png';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

   const[visible,setVisible]=useState(false);
   const navigate = useNavigate();
    return (
        <div className= 'flex items-center justify-between py-5 font-medium w-full px-5 sm:px-[5vw] bg-[#FFF5F7]'>

        <Link to='/'>
        <img src={logo}  className='w-36 cursor-pointer' alt="logo" />
        </Link>


            <ul className='hidden sm:flex gap-5 text-sm text-pink-500'>

                <NavLink to="/music" className='flex flex-col items-center gap-1'>
                    <p>Music</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/>
                </NavLink> 

                <NavLink to="/artist" className='flex flex-col items-center gap-1'>
                    <p>Artis</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/>
                </NavLink> 

                <NavLink to="/merch" className='flex flex-col items-center gap-1 '>
                    <p>Merch</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-pink-500 hidden'/>
                </NavLink> 
        </ul> 

        <div className='flex items-center gap-6'>
           <img src={searchpinky} className='w-7 h-7 cursor-pointer' alt="" />
          
           <div className='group relative'>
               <Link to='/login'><img className='w-5 cursor-pointer' src={profilepinky} alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-2 z-[100]'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-purple-50 text-purple-400 shadow-sm border border-purple-100'>
                        <p className='cursor-pointer hover:text-pink-500'>My Profile </p>
                        <p className='cursor-pointer hover:text-pink-500'>Orders </p>
                            <p className='cursor-pointer hover:text-pink-500'>Logout </p>
                       

                        
                    </div>
                </div>
           </div>
           
            <Link to='/cart'className='relative'>
                <img src={cart} className='w-7 h-7 cursor-pointer' alt="" />
                <p className={`absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-pink-500 text-white aspect-square rounded-full text-[8px]`}>3</p>
            </Link>
            <img onClick={() => setVisible(true)} src={menu} className='w-7 h-7 cursor-pointer sm:hidden' alt="" />
       
        </div> 

        {/* sidebar menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#FFF5F7] transition-all duration-300 ${visible ? 'w-full' : 'w-0'} z-50`}>
             <div className='flex flex-col text-[#FF6B95]'>
        
              {/*  Back Button */}
                 <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer hover:bg-pink-100 transition-colors'>
                 <img className='h-4 rotate-180 opacity-70' src={drop} alt="" />
                 <p className='font-medium'>Back</p>
                 </div>

              {/* Menu Links */}
              <NavLink onClick={() => setVisible(false)} className='py-3 pl-8 border-b border-pink-100 hover:bg-pink-50 transition-all font-medium' to='/music'> Music </NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-3 pl-8 border-b border-pink-100 hover:bg-pink-50 transition-all font-medium' to='/artist'> Artis </NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-3 pl-8 border-b border-pink-100 hover:bg-pink-50 transition-all font-medium' to='/merch'> Merch</NavLink>
             </div>
        </div>
      
      
       </div>
    )
}
export default Navbar;