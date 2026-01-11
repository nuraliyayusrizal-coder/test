// to display place order 
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Musiccontext } from '../Context/Musiccontext';
import { Merchcontext } from '../Context/Merchcontext';
import { useNavigate } from 'react-router-dom';
import fpx from '../assets/fpx.png';
import fpx_logo from '../assets/fpx_logo.png';

const PlaceOrder = () => {
    const navigate = useNavigate();

    // State for form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        phone_num: ''
    });

    // State for FPX bank selection
    const [currentOrderId, setCurrentOrderId] = useState(null);
    const [selectedBank, setSelectedBank] = useState('');
    const [showFPXModal, setShowFPXModal] = useState(false);

    // Malaysian banks for FPX
    const malaysianBanks = [
        'Maybank2U',
        'CIMB Clicks',
        'Public Bank',
        'RHB Bank',
        'Hong Leong Bank',
        'AmBank',
        'Affin Bank',
        'Agrobank',
        'Alliance Bank',
        'Bank Islam',
        'Bank Muamalat',
        'Bank Rakyat',
        'Bank of China',
        'BSN'
    ];

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };
    
    // Take context
    const { currency, cartItems: musicCart, musicItem, setCartItems: setMusicCart, setOrders} = useContext(Musiccontext);
    const { cartItems: merchCart, merchItem, setCartItems: setMerchCart } = useContext(Merchcontext);
    const [method, setMethod] = useState('cod');

    // Check if user is logged in on component mount
    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            alert('Please login to place an order');
            navigate('/login');
        }
    }, [navigate]);

    // Count Subtotal
    const calculateSubtotal = () => {
        let total = 0;
        for (const id in musicCart) {
            if (musicCart[id] > 0) {
                const item = musicItem.find(p => p._id === id);
                if (item) total += item.price * musicCart[id];
            }
        }
        for (const id in merchCart) {
            if (merchCart[id] > 0) {
                const item = merchItem.find(p => p._id === id);
                if (item) total += item.price * merchCart[id];
            }
        }
        return total;
    };

    // Validate form before submission
    const validateForm = () => {
        if (!formData.firstName.trim()) {
            alert('Please enter your first name');
            return false;
        }
        if (!formData.lastName.trim()) {
            alert('Please enter your last name');
            return false;
        }
        if (!formData.email.trim()) {
            alert('Please enter your email address');
            return false;
        }
        if (!formData.street.trim()) {
            alert('Please enter your street address');
            return false;
        }
        if (!formData.city.trim()) {
            alert('Please enter your city');
            return false;
        }
        if (!formData.state.trim()) {
            alert('Please enter your state');
            return false;
        }
        if (!formData.phone_num.trim()) {
            alert('Please enter your phone number');
            return false;
        }
        
        // If FPX is selected, validate bank selection
        if (method === 'fpx' && !selectedBank) {
            alert('Please select a bank for FPX payment');
            return false;
        }

        return true;
    };

    // Handler Place Order
    const handlePlaceOrder = async () => {
        // Validate form first
        if (!validateForm()) {
            return;
        }

        // Store for both methods (COD & FPX)
        const isSuccess = await processOrder('Pending');

        // If successful and method is FPX, show modal
        if (isSuccess && method === 'fpx') {
           setShowFPXModal(true);
       }
    };

    // Process FPX Payment
    const handleFPXPayment = async () => {
    try {
            const response = await fetch('http://localhost/test/API/order.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    updateStatus: true,
                    order_id: currentOrderId,
                    status: 'Paid'
                })
            });
            const result = await response.json();

            if (result.message) {
                alert("Payment Successful! Database updated to Paid.");
                setMusicCart({});
                setMerchCart({});
                setShowFPXModal(false);
                navigate('/orders');
            } else {
                alert("Error updating status: " + result.error);
            }
        } catch (error) {
            console.error("Update failed", error);
            alert("Connection error during payment update.");
        }
    };

    // Process order function
    const processOrder = async (status) => {
        let currentOrder = [];
        const userId = localStorage.getItem('user_id');
        
        // Music Items
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
        }
        // Merch Items
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

        // Prepare Payload
        const orderPayload = {
            submitOrder: true,
            user_id: userId,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email_address: formData.email,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            phone_num: formData.phone_num,
            payment_method: method === 'cod' ? 'Cash on Delivery' : `Online Banking (${selectedBank})`,
            status: status,
            total_price: final_total,
            cart_items: currentOrder 
        };

        // Send to backend
        try {
            const response = await fetch('http://localhost/test/API/order.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload)
            });
            const result = await response.json();
            
            if (result.message) {
                setCurrentOrderId(result.order_id);
                setOrders((prev) => [...prev, ...currentOrder]);
                
                if(method === 'cod'){
                    alert("Your order has been successfully placed!");
                    setMusicCart({});
                    setMerchCart({});
                    navigate('/orders');
                }
                return true;
            } else {
                alert("Error: " + result.error);
                return false;
            }
        } catch (error) {
            console.error("Database connection failed", error);
            alert("Server Error: Please check your PHP code or XAMPP connection.");
            return false;
        }
    };
    const subtotal = calculateSubtotal();
    const delivery_fee = 8;
    const final_total = subtotal > 0 ? subtotal + delivery_fee : 0;

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-10 pt-14 min-h-[80vh] border-t px-5'>
            
            {/* Delivery Form */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <h1 className='text-2xl font-black text-[#880E4F] mb-4 uppercase'>Delivery Information</h1>
                <div className='flex gap-3'>
                    <input name='firstName' value={formData.firstName} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
                    <input name='lastName' value={formData.lastName} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required />
                </div>
                <input name='email' value={formData.email} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' required />
                <input name='street' value={formData.street} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
                <div className='flex gap-3'>
                    <input name='city' value={formData.city} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
                    <input name='state' value={formData.state} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
                </div>
                <input name='phone_num' value={formData.phone_num} onChange={onChangeHandler} className='border border-pink-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Phone number' required />
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
                            {/* FPX Payment Option */}
                            <div onClick={() => setMethod('fpx')} className='flex flex-col gap-3 border border-pink-200 p-3 px-4 cursor-pointer rounded-lg bg-white hover:border-pink-500 transition-all'>
                                <div className='flex items-center gap-3'>
                                    <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'fpx' ? 'bg-pink-500 border-pink-500' : ''}`}></p>
                                    <div className='flex items-center gap-3'>
                                        <img src={fpx} className='h-6 w-auto object-contain' alt="FPX" />
                                        <span className='text-[10px] text-gray-400 font-medium'>(Online Banking)</span>
                                    </div>
                                </div>
                                
                                {/* Bank Selection Dropdown - Only show when FPX is selected */}
                                {method === 'fpx' && (
                                    <div className='ml-6'>
                                        <label className='text-xs text-gray-600 font-medium mb-1 block'>Select Your Bank:</label>
                                        <select 
                                            value={selectedBank} 
                                            onChange={(e) => setSelectedBank(e.target.value)}
                                            className='w-full border border-pink-200 rounded py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500'
                                        >
                                            <option value="">-- Choose Bank --</option>
                                            {malaysianBanks.map((bank, index) => (
                                                <option key={index} value={bank}>{bank}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* COD Payment Option */}
                            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-pink-200 p-2 px-4 cursor-pointer rounded-lg bg-white hover:border-pink-500 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-pink-500 border-pink-500' : ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium uppercase'>Cash On Delivery</p>
                            </div>
                        </div>

                        <div className='w-full text-end mt-8'>
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

            {/* FPX Payment Modal */}
            {showFPXModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl'>
                        <div className='text-center'>
                            <img src={fpx_logo} alt="FPX Logo" className='h-16 mx-auto mb-4' />
                            <h2 className='text-2xl font-black text-[#880E4F] mb-2'>FPX Payment</h2>
                            <p className='text-gray-600 text-sm mb-6'>Complete your payment via {selectedBank}</p>
                            
                            <div className='bg-pink-50 p-6 rounded-xl mb-6'>
                                <p className='text-gray-500 text-sm mb-2'>Total Payment</p>
                                <p className='text-4xl font-black text-[#880E4F]'>{currency} {final_total}.00</p>
                            </div>

                            <div className='flex gap-3'>
                                <button 
                                    onClick={() => setShowFPXModal(false)}
                                    className='flex-1 border-2 border-pink-200 text-[#880E4F] px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition'
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleFPXPayment}
                                    className='flex-1 bg-[#880E4F] text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition shadow-lg'
                                >
                                    Make Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaceOrder;

