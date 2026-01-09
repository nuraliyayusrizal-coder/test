import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Artiscontext } from '../Context/Artiscontext';
import { Musiccontext } from '../Context/Musiccontext';
import { Merchcontext } from '../Context/Merchcontext';

const ArtistDetail = () => {
  const { artistName } = useParams();
  const navigate = useNavigate();
  
  const { artisdata } = useContext(Artiscontext);
  const { musicItem, currency: musicCurrency, addToCart: addMusicToCart } = useContext(Musiccontext);
  const { merchItem, currency: merchCurrency, addToCart: addMerchToCart } = useContext(Merchcontext);
  
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [merchandise, setMerchandise] = useState([]);

  useEffect(() => {
    // Find the artist (case-insensitive)
    const foundArtist = artisdata.find(
      (a) => a.name.toLowerCase() === artistName.toLowerCase()
    );
    
    if (foundArtist) {
      setArtist(foundArtist);
      
      // Filter albums (case-insensitive)
      const artistAlbums = musicItem.filter(
        (item) => item.artis.toLowerCase() === foundArtist.name.toLowerCase()
      );
      setAlbums(artistAlbums);
      
      // Filter merchandise (case-insensitive)
      const artistMerch = merchItem.filter(
        (item) => item.artis.toLowerCase() === foundArtist.name.toLowerCase()
      );
      setMerchandise(artistMerch);
    }
  }, [artistName, artisdata, musicItem, merchItem]);

  if (!artist) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-[#880E4F] text-xl font-bold'>Artist not found</p>
      </div>
    );
  }

  return (
    <div className='pt-10 pb-20 px-5'>
      {/* Back Button */}
      <button
        onClick={() => navigate('/artist')}
        className='mb-8 flex items-center gap-2 text-[#880E4F] font-bold hover:text-pink-600 transition-colors'
      >
        <span className='text-2xl'>←</span>
        <span className='uppercase tracking-wide'>Back to Artists</span>
      </button>

      {/* Artist Header */}
      <div className='flex flex-col md:flex-row gap-8 mb-12 bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-50'>
        <div className='w-full md:w-1/3'>
          <div className='overflow-hidden rounded-2xl aspect-[3/4] border-4 border-pink-100 shadow-md'>
            <img 
              src={artist.img} 
              alt={artist.name} 
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center'>
          <p className='text-pink-500 font-black tracking-widest uppercase text-sm mb-2'>
            {artist.genre}
          </p>
          <h1 className='text-5xl font-black text-[#880E4F] uppercase mb-4'>
            {artist.name}
          </h1>
          <div className='flex gap-6 text-sm text-gray-600'>
            <p className='font-bold'>
              <span className='text-[#880E4F]'>{albums.length}</span> Albums
            </p>
            <p className='font-bold'>
              <span className='text-[#880E4F]'>{merchandise.length}</span> Merchandise Items
            </p>
          </div>
        </div>
      </div>

      {/* Discography Section */}
      <div className='mb-16'>
        <h2 className='text-3xl font-black text-[#880E4F] uppercase mb-6 border-b-4 border-pink-200 pb-3'>
          Discography
        </h2>
        {albums.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {albums.map((album) => (
              <Link 
                to={`/product/${album._id}`} 
                key={album._id}
                className='group cursor-pointer'
              >
                <div className='bg-white rounded-2xl overflow-hidden shadow-md border-2 border-pink-50 hover:shadow-xl transition-all duration-300 hover:scale-105'>
                  <div className='aspect-square overflow-hidden'>
                    <img 
                      src={album.image[0]} 
                      alt={album.name} 
                      className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500'
                    />
                  </div>
                  <div className='p-4'>
                    <p className='text-[10px] text-pink-400 font-bold uppercase mb-1'>
                      {album.category}
                    </p>
                    <h3 className='font-bold text-[#880E4F] text-sm mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors'>
                      {album.name}
                    </h3>
                    <p className='text-lg font-black text-gray-700 font-mono'>
                      {musicCurrency}{album.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className='text-gray-500 italic text-center py-10'>
            No albums available for this artist.
          </p>
        )}
      </div>

      {/* Official Merchandise Section */}
      <div>
        <h2 className='text-3xl font-black text-[#880E4F] uppercase mb-6 border-b-4 border-pink-200 pb-3'>
          Official Merchandise
        </h2>
        {merchandise.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {merchandise.map((merch) => (
              <Link 
                to={`/product/${merch._id}`} 
                key={merch._id}
                className='group cursor-pointer'
              >
                <div className='bg-white rounded-2xl overflow-hidden shadow-md border-2 border-pink-50 hover:shadow-xl transition-all duration-300 hover:scale-105'>
                  <div className='aspect-square overflow-hidden bg-gray-50'>
                    <img 
                      src={merch.image[0]} 
                      alt={merch.name} 
                      className='w-full h-full object-contain p-4 group-hover:scale-110 transition-all duration-500'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='font-bold text-[#880E4F] text-sm mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors'>
                      {merch.name}
                    </h3>
                    <p className='text-lg font-black text-gray-700 font-mono'>
                      {merchCurrency}{merch.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='bg-pink-50 rounded-2xl p-10 text-center border-2 border-pink-100'>
            <p className='text-gray-600 text-lg font-semibold'>
              No merchandise available for this artist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistDetail;
