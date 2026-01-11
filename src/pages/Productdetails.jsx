import React from "react";
import { useParams } from "react-router-dom";
import { Musiccontext } from "../Context/Musiccontext";
import { Merchcontext } from "../Context/Merchcontext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Productdetails = () => {
  const { id } = useParams();
  const { musicItem, addToCart: addMusic } = useContext(Musiccontext);
  const { merchItem, addToCart: addMerch } = useContext(Merchcontext);
  const [product, setProduct] = useState(null);
  const [itemType, setItemType] = useState(null);

  useEffect(() => {
    const foundMusic = musicItem.find(item => item._id === id);
    const foundMerch = merchItem.find(item => item._id === id);
    
    if (foundMusic) {
      setProduct(foundMusic);
      setItemType('music');
    } else if (foundMerch) {
      setProduct(foundMerch);
      setItemType('merch');
    }
  }, [id, musicItem, merchItem]);

  // Function to handle add to cart button 
  const handleAddToCart = () => {
    if (itemType === 'music') {
      addMusic(product._id);
    } else if (itemType === 'merch') {
      addMerch(product._id);
    }
  };

  if (!product) return <div className='p-10'>Loading Info...</div>;

  return (
    <div className='pt-10 px-5 flex flex-col md:flex-row gap-12 bg-[#FFF5F7] min-h-screen'>
      {/* Image Section */}
      <div className='flex-1'>
        <img src={product.image[0]} className='w-full rounded-2xl shadow-xl border-4 border-white' alt={product.name} />
      </div>

      {/* Info Section */}
      <div className='flex-1 flex flex-col justify-center'>
        <p className='text-pink-500 font-black tracking-widest uppercase text-sm'>{product.artis}</p>
        <h1 className='text-4xl font-black text-[#880E4F] uppercase mt-2'>{product.name}</h1>
        <p className='text-3xl font-bold mt-4 text-gray-700 font-mono'>RM{product.price}</p>

        <div className='mt-8 border-t border-pink-100 pt-5'>
          <h3 className='font-bold text-[#880E4F] mb-2 uppercase tracking-tight'>Product Info</h3>
          <p className='text-gray-600 leading-relaxed text-sm italic'>
            {product.description || product.desciption || "Experience the rhythm with our exclusive collection."}
          </p>
        </div>

        {/* button to add to cart */}
        <button 
          onClick={handleAddToCart} 
          className='mt-10 bg-[#880E4F] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-pink-600 active:scale-95 transition-all shadow-lg w-full md:w-max'
        >
          Add to Cart ➔
        </button>

        <p className='mt-4 text-[10px] text-gray-400'>*Official merchandise & high-quality guarantee.</p>
      </div>
    </div>
  );
};

export default Productdetails;