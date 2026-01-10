import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Prepare data to send to register.php
    const payload = {
      email: formData.email,
      password: formData.password,
      ...(currentState === 'Sign Up' 
          ? { signUp: true, fName: formData.username, lName: '' } 
          : { signIn: true })
    };

    try {
      // The URL point to XAMPP folder
      const response = await fetch('http://localhost/test/API/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.error) {
        alert("Error: " + data.error);
      } else {
        alert(data.message);
        if (currentState === 'Login') {
          if(data.user_id){
            localStorage.setItem('user_id', data.user_id);
            localStorage.setItem('username', data.username);
          }
          // Redirect to home page after login
          window.location.href = '/'; 
        } else {
          // After signing up, switch the form to Login mode
          setCurrentState('Login'); 
        }
      }
    } catch (error) {
      console.error("Connect error:", error);
      alert("Database Error: Check your PHP code or XAMPP connection.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#880E4F]'>
      <div className='flex flex-col items-center gap-2'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] bg-pink-500 w-20' />
      </div>

      {/* IMPORTANT: Added name, value, and onChange for React state management */}
      {currentState === "Sign Up" && (
        <input 
          name="username" 
          value={formData.username} 
          onChange={onChangeHandler} 
          type="text" 
          className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' 
          placeholder='Username' 
          required 
        />
      )}
      <input 
        name="email" 
        value={formData.email} 
        onChange={onChangeHandler} 
        type="email" 
        className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' 
        placeholder='Email' 
        required 
      />
      <input 
        name="password" 
        value={formData.password} 
        onChange={onChangeHandler} 
        type="password" 
        className='w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm' 
        placeholder='Password' 
        required 
      />

      <div className='w-full flex justify-between text-xs font-bold text-pink-600 -mt-2'>
        <p className='cursor-pointer hover:underline'>Forgot Password?</p>
        {currentState === 'Login' 
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'> Create an Account</p> 
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'> Login Here </p>}
      </div>
      <button type="submit" className='w-full bg-pink-500 text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition-all shadow-md active:scale-95 text-sm mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;