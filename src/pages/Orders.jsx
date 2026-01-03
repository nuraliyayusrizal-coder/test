import React from 'react';
import  {useContext} from 'react';
import { Musiccontext } from '../Context/Musiccontext';


const Orders = () => {
    
    const { orders, currency } = useContext(Musiccontext);

    return (
        <div className='pt-16 border-t px-5'>
            <div className='text-2xl mb-8 font-black text-[#880E4F] uppercase'>
                <h1>My Orders</h1>
            </div>

            <div>
            {/*to display order info*/}
                {orders && orders.length > 0 ? (
                    orders.map((item, index) => (
                        <div key={index} className='py-4 border-b border-pink-100 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20 rounded-lg shadow-sm' src={item.image[0]} alt="" />
                                <div>
                                    <p className='text-xs text-pink-500 font-bold uppercase'>{item.artis}</p>
                                    <p className='sm:text-base font-black text-[#880E4F] uppercase'>{item.name}</p>
                                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                        <p className='font-bold'>{currency}{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className='text-[10px] bg-slate-100 px-2 rounded'>{item.type}</p>
                                    </div>
                                    <p className='mt-2 text-xs'>Date: <span className='text-gray-400'>{item.date}</span></p>
                                </div>
                            </div>

                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base font-medium uppercase tracking-wider text-green-600'>Order Placed</p>
                                </div>
                                <button className='border px-4 py-2 text-sm font-bold rounded-full bg-white text-[#880E4F] border-pink-200 hover:bg-pink-50 transition'>
                                    Track Order
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center py-20 text-gray-400'>
                        <p>No orders found. Keep supporting your artist!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;