import React, { useState } from 'react';
import avatar1 from '../assets/avatar1.png';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "",
        bio: "",
        gender: "",
        birthday: "",
        phone: "",
        email: "",
    });

    return (
        <div className='p-5 max-w-lg mx-auto bg-white min-h-screen text-black font-sans'>
            
            <div className='flex flex-col items-center gap-2 mb-6 relative w-40 mx-auto'>
                <div className='w-32 h-32 rounded-full border-2 border-gray-400 overflow-hidden flex items-center justify-center bg-gray-100'>
                    <img
                        src={avatar1}
                        className='w-full h-full object-cover'
                        alt="Profile Avatar"
                    />
                </div>
                <button className='absolute bottom-2 right-4 bg-white border border-gray-300 px-2 py-1 rounded text-xs shadow-sm flex items-center gap-1 cursor-pointer'>
                    📝 Edit
                </button>
            </div>

            <div className='space-y-1'>
                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Name</span>
                    <span className={`text-sm cursor-pointer ${userData.name === "" ? "text-red-500" : "font-medium"}`}>
                        {userData.name === "" ? "Set Now >" : userData.name + " >"}
                    </span>
                </div>
                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Bio</span>
                    <span className='text-red-500 text-sm cursor-pointer'> Set Now &gt; </span>
                </div>
            </div>

            <div className='bg-gray-50 p-3 mt-4'>
                <p className='text-xs font-bold text-gray-700 uppercase tracking-wider'>Edit Profile Details</p>
            </div>

            <div className='space-y-1'>
                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Gender ⓘ</span>
                    <span className='text-red-500 text-sm cursor-pointer'>Set Now &gt;</span>
                </div>

                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Birthday ⓘ</span>
                    <span className='text-red-500 text-sm cursor-pointer'>Set Now &gt;</span>
                </div>

                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Phone</span>
                    <span className='text-red-500 text-sm cursor-pointer'>Set Now &gt;</span>
                </div>

                <div className='flex justify-between items-center border-b border-gray-100 py-4 px-2'>
                    <span className='text-gray-500 text-sm'>Email</span>
                    <span className='text-red-500 text-sm cursor-pointer'>Set Now &gt;</span>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;