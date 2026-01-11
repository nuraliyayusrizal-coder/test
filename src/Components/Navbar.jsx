import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import logo from '../assets/logo.png';
import searchpinky from '../assets/searchpinky.png';
import profilepinky from '../assets/profilepinky.png';
import cart from '../assets/cart.png';
import menu from '../assets/menu.png';
import drop from '../assets/drop.png';
import { Link, NavLink } from 'react-router-dom';
import { Musiccontext } from '../Context/Musiccontext';
import { Merchcontext } from '../Context/Merchcontext';


const Navbar = () => {

   const[visible,setVisible]=useState(false);
   const[isLoggedIn, setIsLoggedIn] = useState(false);
   const navigate = useNavigate();

const { cartItems: musicCart } = useContext(Musiccontext);
const { cartItems: merchCart } = useContext(Merchcontext);
const { setShowSearch } = useContext(Musiccontext);

    // Check if user is logged in
    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        setIsLoggedIn(!!userId);
    }, []);

    // Function to calculate cart count 
    const getCartCount = () => {
        let totalCount = 0;

        // to calculate add to cart music
        for (const _id in musicCart) {
            if (musicCart[_id] > 0) {
                totalCount += musicCart[_id];
            }
        }

        // to calculate add to cart merch
        for (const _id in merchCart) {
            if (merchCart[_id] > 0) {
                totalCount += merchCart[_id];
            }
        }

        return totalCount;
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        navigate('/');
        alert('You have been logged out successfully!');
    };

    // Handle profile click
    const handleProfileClick = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            navigate('/my-profile');
        }
    };
    return (
    <div className= 'flex items-center justify-between py-5 font-medium w-full px-5 sm:px-[5vw] bg-[#FFF5F7]'>
{/* to back to home page when click on logo*/}
<Link to='/'>
        <img src={logo}  className='w-36 cursor-pointer' alt="logo" />
        </Link>

        {/*menu on the navbar*/}
<ul className='hidden sm:flex gap-5 text-sm text-pink-500'>
    {/*music menu*/}
 <NavLink to="/music" className='flex flex-col items-center gap-1'>
                    {({ isActive }) => (
                        <>
                            <p>Music</p>
                            <hr className={`w-2/4 border-none h-[1.5px] bg-pink-500 ${isActive ? 'block' : 'hidden'}`} />
                        </>
                    )}
</NavLink> 
 {/*artist menu*/}
<NavLink to="/artist" className='flex flex-col items-center gap-1'>
                    {({ isActive }) => (
                        <>
                            <p>Artist</p>
                            <hr className={`w-2/4 border-none h-[1.5px] bg-pink-500 ${isActive ? 'block' : 'hidden'}`} />
                        </>
                    )}
</NavLink> 
 {/*merch menu */}
<NavLink to="/merch" className='flex flex-col items-center gap-1 '>
                    {({ isActive }) => (
                        <>
                            <p>Merch</p>
                            <hr className={`w-2/4 border-none h-[1.5px] bg-pink-500 ${isActive ? 'block' : 'hidden'}`} />
                        </>
                    )}
</NavLink> 
    </ul> 
        <div className='flex items-center gap-6'>
           <img 
           onClick={() => setShowSearch(true)}
           src={searchpinky} className='w-7 h-7 cursor-pointer' alt="" />
          
           <div className='group relative'>
               <img onClick={handleProfileClick} className='w-5 cursor-pointer' src={profilepinky} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-2 z-[100]'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-purple-50 text-purple-400 shadow-sm border border-purple-100'>
                        <p onClick={handleProfileClick} className='cursor-pointer hover:text-pink-500'>My Profile</p>
                        <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-pink-500'>Orders</p>
                        {isLoggedIn ? (
                            <p onClick={handleLogout} className='cursor-pointer hover:text-pink-500'>Logout</p>
                        ) : (
                            <p onClick={() => navigate('/login')} className='cursor-pointer hover:text-pink-500'>Login</p>
                        )}
                    </div>
                </div>
   </div>
   {/*to link cart icon with cart page*/}
   <Link to='/cart' className='relative'>
            <img  src={cart} className='w-7 h-7 cursor-pointer' alt="" />
            {/* to link with getCartCount function to ensure cart count can display on the cart icon */}
            {getCartCount() > 0 && (
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-pink-500 text-white aspect-square rounded-full text-[8px]'>
                            {getCartCount()}
                        </p>
                    )}
                </Link>
       
</div> 

{/* small sidebar menu for small screen like smartphone*/}
    <img onClick={() => setVisible(true)} src={menu} className='w-5 cursor-pointer sm:hidden' alt="menu" />
            <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-[100] ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600 h-full overflow-hidden'>
                    {/* back button*/}
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-5 cursor-pointer border-b bg-pink-50'>
                        <img className='h-4 rotate-180 opacity-70' src={drop} alt="back icon" />
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
