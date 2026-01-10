import { useState } from "react";
import { createContext } from "react";
import React, { useEffect } from "react";
{/*Blackpink merch*/}
import bp_m1 from '../assets/bp_m1.jpg';
import bp_m2 from '../assets/bp_m2.jpg';
{/*Bts merch*/}
import bts_m1 from '../assets/bts_m1.jpg';
import bts_m2 from '../assets/bts_m2.png';
{/*Treasure merch*/}
import trea_m1 from '../assets/trea_m1.jpg';
import trea_m2 from '../assets/trea_m2.jpg';
{/*Twice merch*/}
import twice_m1 from '../assets/twice_m1.jpg';
import twice_m2 from '../assets/twice_m2.jpg';
{/*Justin Bieber merch*/}
import jb_m1 from '../assets/jb_m1.png';
import jb_m2 from '../assets/jb_m2.png';
{/*Dua lipa merch*/}
import dl_m1 from '../assets/dl_m1.png';
import dl_m2 from '../assets/dl_m2.png';
{/*Maroon 5  merch*/}
import m_m1 from '../assets/m_m1.png';
import m_m2 from '../assets/m_m2.png';
{/*Ariana grande merch*/}
import ag_m1 from '../assets/ag_m1.png';
import ag_m2 from '../assets/ag_m2.png';
{/*Exist merch*/}
import exist_m1 from '../assets/exist_m1.png';
{/*Awie merch*/}
import awie_m1 from '../assets/awie_m1.png';
import awie_m2 from '../assets/awie_m2.png';
{/*Xpdc merch*/}
import xpdc_m1 from '../assets/xpdc_m1.png';
import xpdc_m2 from '../assets/xpdc_m2.png';
{/*yuna merch*/}
import yuna_m1 from '../assets/yuna_m1.png';
import yuna_m2 from '../assets/yuna_m2.png';
{/*insomniacks merch*/}
import insom_m1 from '../assets/insom_m1.png';
import insom_m2 from '../assets/insom_m2.png';
{/*Dolla merch*/}
import dolla_m1 from '../assets/dolla_m1.png';
import dolla_m2 from '../assets/dolla_m2.png';
{/*Alyph merch*/}
import alyph_m1 from '../assets/alyph_m1.png';

 export const Merchcontext = createContext();

    export const MerchcontextProvider = (props) => {
    const merchItem = [
    //blackpink//
    {
        _id: "mh001",
        name:"Blackpink Lightstick",
        artis: "Blackpink",
        price:300,
        image :[bp_m1], 
        description:"Official Blackpink Hammer Lightstick"
    },
    //blackpink//
    {
        _id: "mh002",
        name:"Blackpink Luggage",
        artis: "Blackpink",
        price:499,
        image :[bp_m2], 
        description:"Limited edition Born Pink luggage "
    },
    //bts//
    {
        _id: "mh003",
        name:"Bts Lightstick",
        artis: "Bts",
        price:300,
        image :[bts_m1], 
        description:"Official Army Lighstick"
    },
        //bts//
    {
        _id: "mh004",
        name:"Bts Calendar",
        artis: "Bts",
        price:99, 
        image :[bts_m2], 
        description:"Exclusive  calendar with high quality photos"
    },
    //treasure//
    {
        _id: "mh005",
        name:"Treasure lighstick",
        artis: "Treasure",
        price:499,
        image :[trea_m1], 
        description:"Official treasure lightsick with diamond design"
    },
     //treasure//
    {
        _id: "mh006",
        name:"Treasure totebag",
        artis: "Treasure",
        price:69,
        image :[trea_m2], 
        description: "High quality canvas totebag "
    },  
     //twice//
    {
        _id: "mh007",
        name:"Twice plush",
        artis: "Twice",
        price:80,
        image :[twice_m1], 
        description:"Adorable plush doll with soft material"
    },
    //twice//
    {
        _id: "mh008",
        name:"Twice Lightstick",
        artis: "Twice",
        price:399,
        image :[twice_m2], 
        description:"Official Twice lighstick"
    },
    //Justin Bieber//
    {
        _id: "mh009",
        name:"JB Towel",
        artis: "Justin Bieber",
        price:55,
        image :[jb_m1], 
        description:"World tour microfibre JB towel"
    },
    //Justin Bieber//
    {
        _id: "mh010",
        name:"JB T-shirt limited edition",
        artis: "Justin Bieber",
        price:85,
        image :[jb_m2], 
        description:"free size t-shirt with 100% made of Cotton"
    },
    //Dua Lipa//
    {
        _id: "mh011",
        name:"DL Stockin",
        artis: "Dua Lipa",
        price:55,
        image :[dl_m1], 
        description:"Future Nostalgia socks"
    },
    //Dua Lipa//
    {
        _id: "mh012",
        name:"Sugaboo Necklace",
        artis: "Dua lipa",
        price:80,
        image :[dl_m2], 
        description:"Elegant necklace imspired by the Levitating mv"
    },
    //Maroon 5//
    {
        _id: "mh013",
        name:"Payphone Headset",
        artis: "Maroon 5",
        price:299,
        image :[m_m1], 
        description:"Retro wired headset with maroon 5 logo"
    },
    //Maroon 5//
    {
        _id: "mh014",
        name:"Maroon 5 Live Drawing",
        artis: "Maroon 5",
        price:80,
        image :[m_m2], 
        description:"Limited edition band's live concert sketch"
    },
    //Ariana Grande//
    {
        _id: "mh015",
        name:"Sweatshirt",
        artis: "Ariana Grande",
        price:155,
        image :[ag_m1], 
        description:"free size sweatshirt 100% guarantee comfortable"
    },
    //Ariana Grande//
    {
        _id: "mh016",
        name:"Baseball caps-Sweeter",
        artis: "Ariana Grande",
        price:99,
        image :[ag_m2], 
        description:"sweetener baseball cap white edition"
    },
    //Exist//
    {
        _id: "mh017",
        name:"Jangan Gentar-Cassete",
        artis: "Exist",
        price:99,
        image :[exist_m1], 
        description:"Rare cassete of Jangan Gentar album"
    },
    //Awie//
    {
        _id: "mh018",
        name:"Awie-Cassete",
        artis: "Awie",
        price:75,
        image :[awie_m1], 
        description:"Cassete for awie solo"
    },
    //Awie//
    {
        _id: "mh019",
        name:"Awie Romantika",
        artis: "Awie",
        price:45,
        image :[awie_m2], 
        description:"free size T-shirt for Romantika concert"
    },
    //Xpdc//
    {
        _id: "mh020",
        name:"T-shirt Teman",
        artis: "Xpdc",
        price:45,
        image :[xpdc_m1], 
        description:"free size T-shirt for teman "
    },
    //Xpdc//
    {
        _id: "mh021",
        name:"Darjah satu-Cassete",
        artis: "Xpdc",
        price:75,
        image :[xpdc_m2], 
        description:"Original cassete for Darjah Satu XPDC"
    },
     //Yuna//
    {
        _id: "mh022",
        name:"Long sleeves T-shirt Yuna",
        artis: "Yuna",
        price:40,
        image :[yuna_m1], 
        description:"free size with long sleeve shirt"
    },
    //Yuna//
    {
        _id: "mh023",
        name:"Short sleeves T-shirt Yuna",
        artis: "Yuna",
        price:35,
        image :[yuna_m2], 
        description:"free size with short sleeve shirt"
    },
    
    //Insomniacks//
    {
        _id: "mh024",
        name:"Guitar Pick Set",
        artis: "Insomniacks",
        price:55,
        image :[insom_m2], 
    },
    //Dolla//
    {
        _id: "mh025",
        name:"Dolla Lighstick",
        artis: "Dolla",
        price:299,
        image :[dolla_m1], 
        description:"Exclusive dolla lighstick"
    },
    //Dolla//
    {
        _id: "mh026",
        name:"Mystery Photocard",
        artis: "Dolla",
        price:10,
        image :[dolla_m2], 
        description:"Mystery photocard of Dolla member"
    },
     //Alyph//
    {
        _id: "mh027",
        name:"Storm Keychain",
        artis: "Alyph",
        price:15,
        image :[alyph_m1], 
        description:"Official Alyph storm keychain"
    },
     //Insomniacks//
    {
        _id: "mh028",
        name:"T-shirt Maniacks",
        artis: "Insomniacks",
        price:99,
        image :[insom_m1], 
        description:"limited edition T-shirt Maniacks"
    },

]


//function to add to cart
const [cartItems, setCartItems] = useState({});
//funtion to search
const [search, setSearch] = useState('')
const [showSearch, setShowSearch] = useState(false);

// Fetch cart from backend on component mount
    useEffect(() => {
        const fetchUserCart = async () => {
            const userId = localStorage.getItem('user_id');
            if (!userId) return; 

                try {
                    const response = await fetch(`http://localhost/test/API/get_cart.php?user_id=${userId}`);
                    const data = await response.json();
                    
                    if (Array.isArray(data)) {
                        let tempCart = {};
                        data.forEach(item => {
                            if (item.product_id.startsWith('mh')) {
                                tempCart[item.product_id] = parseInt(item.quantity);
                            }
                        });
                        setCartItems(tempCart);
                    }
                } catch (error) {
                    console.error("Error, cannot sync to merch cart:", error);
                }
            };
        fetchUserCart();
    }, []);
    

    // Update to database 
const addToCart = async (itemId) => {
    setCartItems((prev) => ({...prev,
        [itemId]: (prev[itemId] || 0) + 1  
    }));

// Save to Database
    const userId = localStorage.getItem('user_id');
    const product = merchItem.find(p => p._id === itemId);

        if (userId && product) {
            try {
                await fetch('http://localhost/test/API/add_to_cart.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: userId,
                        product_id: itemId,
                        name: product.name,
                        price: product.price,
                        image: product.image[0]
                    })
                });
                alert("Successfully added merch to cart!");
            } catch (error) {
                console.error("Error, cannot save into database:", error);
            }
        }
    };

//function to updateQuantity 
const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);

// Update Database
        const userId = localStorage.getItem('user_id');
        if (userId) {
            try {
                await fetch('http://localhost/test/API/update_cart.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: userId,
                        product_id: itemId,
                        quantity: quantity
                    })
                });
            } catch (error) {
                console.error("Gagal update database merch:", error);
            }
        }
    };

//function to get cart count
const getCartCount = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
};

    const value = { 
        merchItem, 
        currency: "RM", 
        addToCart, 
        cartItems ,
        updateQuantity,
        setCartItems,
        search,
        setSearch,
        showSearch,
        setShowSearch
    };

    return (
        <Merchcontext.Provider value={value}>
            {props.children}
        </Merchcontext.Provider>
    );
};

export default MerchcontextProvider; 