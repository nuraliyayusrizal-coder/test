// to display place order 
import React from 'react';
import  {useContext} from 'react';
import { useState } from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { Merchcontext } from '../Context/Merchcontext';
import { useNavigate } from 'react-router-dom';
import fpx from '../assets/fpx.png';

const PlaceOrder = () => {
    const navigate = useNavigate();
    
    // to get music & merch data
    const { currency, cartItems: musicCart, musicItem, setCartItems: setMusicCart, orders, setOrders} = useContext(Musiccontext);
    const { cartItems: merchCart, merchItem, setCartItems: setMerchCart } = useContext(Merchcontext);
    const [method, setMethod] = useState('cod');

    // 2.Function to calculate subTotal
    const calculateSubtotal = () => {
        let total = 0;
        for (const id in musicCart) {//for music
            if (musicCart[id] > 0) {
                const item = musicItem.find(p => p._id === id);
                if (item) total += item.price * musicCart[id];
            }
        }
        for (const id in merchCart) {// for merch
            if (merchCart[id] > 0) {
                const item = merchItem.find(p => p._id === id);
                if (item) total += item.price * merchCart[id];
            }
        }
        return total;
    };

    // Function to handle place order
    const handlePlaceOrder = () => {
      let currentOrder = [];
      //for music
       for (const id in musicCart) {
        if (musicCart[id] > 0) {
            const item = musicItem.find(p => p._id === id);
            if (item) {
                currentOrder.push({ 
                    ...item, 
                    quantity: musicCart[id], 
                    date: new Date().toDateString(),
                    type: 'Music'
                });
            }
        }
    }//for merch
    for (const id in merchCart) {
        if (merchCart[id] > 0) {
            const item = merchItem.find(p => p._id === id);
            if (item) {
                currentOrder.push({ 
                    ...item, 
                    quantity: merchCart[id], 
                    date: new Date().toDateString(),
                    type: 'Merch' 
                });
            }
        }
    }
        setOrders((prev) => [...prev, ...currentOrder]);
        alert("Your order has been successfully placed!");

        // Reset cart to 0
        setMusicCart({});
        setMerchCart({});

        navigate('/orders');
    };
    
    const subtotal = calculateSubtotal();
    const delivery_fee = 8;

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-10 pt-14 min-h-[80vh] border-t px-5'>
            
            {/* Delivery info */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <h1 className='text-2xl font-black text-[#880E4F] mb-4 uppercase'>Delivery Information</h1>
                <div className='flex gap-3'>
                    <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
                    <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required />
                </div>
                <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' required />
                <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
                <div className='flex gap-3'>
                    <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
                    <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
                </div>
                <input className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number' required />
            </div>

            {/* Cart Totals & Payment Method */}
            <div className='mt-8'>
                <div className='min-w-80'>
                    <div className='w-full'>
                        <h2 className='text-xl font-black text-[#880E4F] uppercase mb-5'>Cart Totals</h2>
                        <div className='flex flex-col gap-2 text-sm bg-pink-50/30 p-4 rounded-xl border border-pink-100'>
                            <div className='flex justify-between'>
                                <p>Subtotal</p>
                                <p>{currency}{subtotal}.00</p>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <p>Shipping Fee</p>
                                <p>{currency}{delivery_fee}.00</p>
                            </div>
                            <hr />
                            <div className='flex justify-between font-bold text-[#880E4F] text-lg'>
                                <p>Total</p>
                                <p>{currency}{subtotal > 0 ? subtotal + delivery_fee : 0}.00</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <h2 className='text-lg font-bold text-[#880E4F] uppercase mb-4'>Payment Method</h2>
                        <div className='flex flex-col gap-3'>
                            {/*Payment= fpx*/}
                            <div onClick={() => setMethod('fpx')} className='flex items-center gap-3 border border-pink-200 p-2 px-4 cursor-pointer rounded-lg bg-white hover:border-pink-500 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'fpx' ? 'bg-pink-500 border-pink-500' : ''}`}></p>
                                <div className='flex items-center gap-3'>
                                    <img src={fpx} className='h-6 w-auto object-contain' alt="FPX" />
                                    <span className='text-[10px] text-gray-400 font-medium'>(Online Banking)</span>
                                </div>
                            </div>
                            {/*Payment=Cod*/}
                            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-pink-200 p-2 px-4 cursor-pointer rounded-lg bg-white hover:border-pink-500 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-pink-500 border-pink-500' : ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium uppercase'>Cash On Delivery</p>
                            </div>
                        </div>

                        <div className='w-full text-end mt-8'>
                        {/*button to place order*/}
                            <button 
                                onClick={handlePlaceOrder}
                                className='bg-[#880E4F] text-white px-16 py-3 text-sm font-bold rounded-full hover:bg-pink-600 transition uppercase shadow-lg w-full sm:w-auto'
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder; 