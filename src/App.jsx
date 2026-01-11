import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Artis from './pages/Artis';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import MyProfile from './pages/MyProfile';
import Merch from './pages/Merch';  
import Navbar from './Components/Navbar';
import Music from './pages/Music';
import Footer from './Components/Footer';
import Productdetails from './pages/Productdetails';
import ArtistDetail from './pages/ArtistDetail';
import Searchbar from './Components/Searchbar';

const App = () => {
  return (
    <div className='bg-[#FFF5F7] min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/> 
      <Searchbar/>
      <Routes> 
       <Route path='/' element={<Home/>} />
       <Route path="/music" element={<Music/>} />
       <Route path="/merch" element={<Merch/>} />
       <Route path="/artist" element={<Artis/>} />
       <Route path="/artist/:artistName" element={<ArtistDetail/>} />
       <Route path="/cart" element={<Cart/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/place-order" element={<PlaceOrder/>} />
       <Route path="/orders" element={<Orders/>} />
       <Route path="/my-profile" element={<MyProfile/>} />
       <Route path='/product/:id' element={<Productdetails/>}/>
  

     </Routes>
      <Footer/>
    </div>
    
  )

 

}

export default App
       