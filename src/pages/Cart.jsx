// to display add to cart music & merch
import React from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { Merchcontext } from '../Context/Merchcontext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import bin from '../assets/bin.svg';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  //to get music and merch data
 const { musicItem, cartItems: musicCart, currency, updateQuantity: updateMusicQty } = useContext(Musiccontext);
 const { merchItem, cartItems: merchCart, updateQuantity: updateMerchQty } = useContext(Merchcontext);
 const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const delivery_fee=8; // delivery fee are constant to RM8
    

      useEffect(() => {
        const tempData = [];

        // for Music
        if (musicCart) {
            for (const items in musicCart) {
                if (musicCart[items] > 0) {
                    const product = musicItem.find((p) => p._id === items);
                    if (product) {
                        tempData.push({
                            ...product,
                            quantity: musicCart[items],
                            type: 'music'
                        });
                    }
                }
            }
        }

        // for Merch
        if (merchCart) {
            for (const items in merchCart) {
                if (merchCart[items] > 0) {
                    const product = merchItem.find((p) => p._id === items);
                    if (product) {
                        tempData.push({
                            ...product,
                            quantity: merchCart[items],
                            type: 'merch'
                        });
                    }
                }
            }
        }

        setCartData(tempData);
    }, [musicCart, merchCart, musicItem, merchItem]);
 
const subTotal = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className='pt-14 border-t px-5'>
            <h1 className='text-3xl font-black text-[#880E4F] mb-8 uppercase'>Your Cart</h1>

            <div className='flex flex-col gap-4'>
                {cartData.map((item, index) => (
                   
                    <div key={index} className='py-4 border-b border-pink-100 flex items-center gap-4 justify-between'>
                        <div className='flex items-start gap-6'>
                            <img className='w-16 sm:w-20 rounded-lg shadow-sm' src={item.image[0]} alt="" />
                            <div>
                                <p className='text-xs text-pink-500 font-bold uppercase'>{item.artis}</p>
                                <p className='text-sm sm:text-lg font-black text-[#880E4F] uppercase'>{item.name}</p>
                                <div className='flex items-center gap-5 mt-2'>
                                    <p className='font-bold text-gray-700'>{currency}{item.price}</p>
                                    <div className='flex items-center gap-2'>
                                     <p className='text-xs font-bold text-gray-500'>QTY:</p>
                                     <input 
                                      onChange={(e) => {
                                      const val = e.target.value;
            
                                       if (val === '' || val === '0') return;

                                       if (item.type === 'music') {
                                        updateMusicQty(item._id, Number(val));
                                        } else {
                                        updateMerchQty(item._id, Number(val));
                                       }
                                   }}
                                         className='border border-pink-200 w-12 sm:w-16 px-1 py-1 text-center bg-white rounded focus:outline-pink-500' 
                                       type="number" 
                                        min={1} 
                                        defaultValue={item.quantity} />
                                       </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='text-right'>
                                <p className='font-black text-lg'>{currency}{item.price * item.quantity}</p>
                            </div>
                           
                            <img
                                onClick={() => item.type === 'music' ? updateMusicQty(item._id, 0) : updateMerchQty(item._id, 0)}
                                src={bin}
                                className='w-4 ml-4 sm:w-5 cursor-pointer hover:opacity-70'
                                alt="Delete"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Checkout */}
            {cartData.length > 0 ? (
                <div className='flex justify-end my-20'>
                    <div className='w-full sm:w-[450px]'>
                        <div className='flex flex-col gap-2 border p-6 rounded-2xl bg-pink-50/30'>
                            <h2 className='text-xl font-black text-[#880E4F] uppercase border-b pb-3'>Cart Totals</h2>
                            <div className='flex justify-between py-2'>
                                <p>Subtotal</p>
                                <p>{currency}{subTotal}.00</p>
                            </div>
                            <hr/>
                            <div className='flex justify-between py-2'>
                              <p>Shipping Fee</p>
                               <p>{currency}{delivery_fee}.00</p>
                               </div>
                            <div className='flex justify-between py-2 border-t font-black text-lg text-[#880E4F]'>
                                <p>Total</p>
                                <p>{currency}{subTotal+delivery_fee}.00</p>
                            </div>
                          <button 
                          onClick={() => navigate('/place-order')} 
                          className='bg-[#880E4F] text-white text-sm my-8 px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition shadow-lg uppercase'>
                           Proceed to Checkout
                           </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='text-center py-20 text-gray-400'>
                    <p>Your cart is empty. Let Go shopping!</p>
                </div>
            )}
        </div>
    );
};

export default Cart; 

