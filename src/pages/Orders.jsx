import React, { useState } from 'react';
import  {useContext} from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { useEffect } from 'react';


const Orders = () => {
    const { currency } = useContext(Musiccontext);
    const [ordersHistory, setOrdersHistory] = useState([]);
    
    const fetchOrders = async () => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            try {
                const response = await fetch(`http://localhost/test/API/get_orders.php?user_id=${userId}`);
                const data = await response.json();
                setOrdersHistory(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className='pt-16 border-t px-5'>
            <div className='text-2xl mb-8 font-black text-[#880E4F] uppercase'>
                <h1>My Orders</h1>
            </div>

            <div>
            {/*to display order info*/}
                {ordersHistory && ordersHistory.length > 0 ? (
                    ordersHistory.map((item, index) => (
                        <div key={index} className='py-4 border-b border-pink-100 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                {/*Match with JSON: image_url */}
                                <img className='w-16 sm:w-20 rounded-lg shadow-sm' src={item.image_url} alt="" />
                                <div>
                                    {/* Match dengan JSON: product_name */}
                                    <p className='sm:text-lg font-black text-[#880E4F] uppercase leading-tight'>{item.product_name}</p>
                                    <div className='flex items-center gap-4 mt-2 text-base text-gray-600 font-medium'>
                                        <p>{currency}{item.price}</p>
                                        <p className='bg-pink-50 px-2 py-0.5 rounded text-pink-600 text-xs'>Qty: {item.quantity}</p>
                                    </div>
                                    {/* Match dengan JSON: created_at dan order_id */}
                                    <p className='mt-3 text-[11px] text-gray-400'>
                                        Date: <span className='text-gray-500'>{item.created_at}</span>
                                    </p>
                                    <p className='text-[10px] font-bold text-pink-300 tracking-widest uppercase'>
                                        Order ID: #{item.order_id}
                                    </p>
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