// to display login pages including sign up and sign in
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const navigate = useNavigate();
  const onSubmitHandler = async (event) => {
    event.preventDefault(); 
    navigate('/');// back to home page
    
  }

  return (
    //form to signup/ login 
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#880E4F]'>
      {/*form title*/}
    <div className='flex flex-col items-center gap-2'>
    <p className='prata-regular text-3xl'>{currentState}</p>
    <hr className='border-none h-[1.5px] bg-pink-500 w-20'/>
    </div>
    {/*input */}
    {currentState === "Sign Up" && (
      <input type="text" className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' placeholder='Username' />
    )}
    <input type="email" className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' placeholder='Email' />
    <input type="password" className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' placeholder='Password' />
    
      
    {/*to change signup to login & forgot password */}
    <div className='w-full flex justify-between text-xs font-bold text-pink-600 -mt-2'>
        <p className='cursor-pointer hover:underline'>Forgot Password?</p>

      {currentState === 'Login' 
      ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'> Create an Account</p> 
      : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'> Login Here </p>}
      </div>
      {/*submit button*/}
    <button type="submit" className='w-full bg-pink-500 text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition-all shadow-md active:scale-95 text-sm mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'} 
    </button>

    </form>
  )
}

export default Login 