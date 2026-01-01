import React from "react";
import { useState } from "react";
import { createContext } from "react";
{/* blackpink album */ }
import bp_a1 from "../assets/bp_a1.jpg";
import bp_a2 from "../assets/bp_a2.png";
import bp_a3 from "../assets/bp_a3.jpg";
import bp_a4 from "../assets/bp_a4.png";
import bp_a5 from "../assets/bp_a5.png";
{/* bts album*/}
import bts_a1 from "../assets/bts_a1.png";
import bts_a4 from "../assets/bts_a4.png";
import bts_a5 from "../assets/bts_a5.jpg";
{/*treasure album*/}
import trea_a1 from "../assets/trea_a1.png";
import trea_a2 from "../assets/trea_a2.png";
import trea_a3 from "../assets/trea_a3.png";
import trea_a4 from "../assets/trea_a4.jpg";
import trea_a5 from "../assets/trea_a5.jpg";
import trea_a6 from "../assets/trea_a6.png";
import trea_a7 from "../assets/trea_a7.png";
import trea_a8 from "../assets/trea_a8.png";
{/*twice album */}
import twice_a1 from "../assets/twice_a1.png";
import twice_a2 from "../assets/twice_a2.jpg";
import twice_a3 from "../assets/twice_a3.jpg";
import twice_a4 from "../assets/twice_a4.jpg";
{/*justin bieber album */}
import jb_a1 from "../assets/jb_a1.png";
import jb_a2 from "../assets/jb_a2.png";
import jb_a6 from "../assets/jb_a6.png";
import jb_a7 from "../assets/jb_a7.jpg";
{/*dua lipa album */}
import  dl_a1 from "../assets/dl_a1.png";
import  dl_a3 from "../assets/dl_a3.png";
import  dl_a4 from "../assets/dl_a4.png";
{/*maroon 5 album */}
import m_a1 from "../assets/m_a1.png";
import m_a3 from "../assets/m_a3.png";
import m_a4 from "../assets/m_a4.png";
{/*ariana grande album*/}
import ag_a1 from "../assets/ag_a1.png";
import ag_a2 from "../assets/ag_a2.png";
import ag_a5 from "../assets/ag_a5.png";
{/*exist album*/}
import exist_a1 from "../assets/exist_a1.jpg";
import exist_a2 from "../assets/exist_a2.jpg";
{/*awie album*/}
import awie_a1 from "../assets/awie_a1.jpg";
import awie_a2 from "../assets/awie_a2.jpg";
{/*mazleela*/}
import mazleela_a1 from "../assets/mazleela_a1.jpg";
{/*xpdc album*/}
import xpdc_a1 from "../assets/xpdc_a1.png";
{/*yuna album*/}
import yuna_a1 from "../assets/yuna_a1.png";
import yuna_a2 from "../assets/yuna_a2.png";
import yuna_a3 from "../assets/yuna_a3.png";
{/*insomniacks album*/}
import insom_a1 from "../assets/insom_a1.png";
import insom_a2 from "../assets/insom_a2.png";
import insom_a3 from "../assets/insom_a3.png";
{/*dolla album*/}
import dolla_a1 from "../assets/dolla_a1.png";
import dolla_a2 from "../assets/dolla_a2.png";
{/*alyph album*/}
import alyph_a1 from "../assets/alyph_a1.png";

export const Musiccontext = createContext();

const MusiccontextProvider = (props) => {
    const musicItem = [
    //blackpink//
    {
        _id: "m001",
        name:"Born Pink",
        artis: "Blackpink",
        desciption:"The Born Pink album version comes in Black , White and Pink box editions. Each includes a CD, a thick photobook, random photocard, postcard, poster, and extra goodies like stickers ",
        price:500,
        image :[bp_a1, bp_a2,bp_a3],
        genre:"Kpop",
        category:"Album", 
    },
     //blackpink//
    {
        _id: "m002",
        name:"The Album",
        artis: "Blackpink",
        desciption:"BLACKPINK's first vinyl release",
        price:200,
        image :[bp_a4],
        genre:"Kpop",
        category:"Vinyl", 
    },
    //blackpink//
    {
        _id: "m003",
        name:"How You Like That",
        artis: "Blackpink",
        desciption:"Special physical edition to celebrate BLACKPINK’s comeback before The Album",
        price:150,
        image :[bp_a5],
        genre:"Kpop",
        category:"CD", 
    },
    //bts//
    {
        _id: "m004",
        name:"Run",
        artis: "Bts",
        desciption:"The BTS Run CD is a Japanese single released in 2016, featuring Run and Butterfly in Japanese plus the exclusive track Good Day",
        price:150,
        image :[bts_a1],
        genre:"Kpop",
        category:"CD", 
    },
    //bts//
    {
        _id: "m005",
        name:"Love Yourself",
        artis: "Bts",
        desciption:"A collectible K‑pop album featuring BTS’s Love Yourself series. Includes CD, photobook, random photocard, poster, and lyric paper. Available in multiple versions with unique designs and inclusions",
        price:550,
        image :[bts_a5],
        genre:"Kpop",
        category:"Album", 
    },
    //bts//
    {
        _id: "m006",
        name:"Boy In Love",
        artis: "Bts",
        desciption:"The Boy In Luv CD single (2014) includes Japanese versions of Boy In Luv, N.O., and Just One Day, with regular CD and limited CD+DVD editions",
        price:550,
        image :[bts_a4],
        genre:"Kpop",
        category:"CD", 
    },
     //twice//
    {
        _id: "m007",
        name:"TWICEcoaster: Lane 2",
        artis: "Twice",
        desciption:"TWICEcoaster: Lane 2 is TWICE’s special album featuring the bubbly hit Knock Knock. It comes in two physical versions with photobooks, photocards, and posters, making it a fan-favorite collectible",
        price:1000,
        image :[twice_a2,twice_a3,twice_a4],
        genre:"Kpop",
        category:"Album", 
    },
    //twice//
    {
        _id: "m008",
        name:"TWICEcoaster: Lane 2",
        artis: "Twice",
        desciption:"The Candy Pop CD single (2018) by TWICE includes the title track, Brand New Girl, and instrumentals",
        price:50,
        image :[twice_a1],
        genre:"Kpop",
        category:"CD", 
    },
    //treasure//
    {
        _id: "m009",
        name:"The Reboot Black Edition",
        artis: "Treasure",
        desciption:"The Reboot Black Edition is TREASURE’s premium photobook album with a dark, stylish design and collectible inclusions",
        price:900,
        image :[trea_a1,trea_a4,trea_a7],
        genre:"Kpop",
        category:"Album", 
    },
    {//treasure//
        _id: "m010",
        name:"The Reboot Gray Edition",
        artis: "Treasure",
        desciption:"The Reboot Gray Edition is TREASURE’s photobook album with a silver-gray design, CD, photobook, lyric cards, postcards, poster, and random photocard",
        price:900,
        image :[trea_a3,trea_a8],
        genre:"Kpop",
        category:"Album", 
    },
    {//treasure//
        _id: "m011",
        name:"The Reboot White Edition",
        artis: "Treasure",
        desciption:"The Reboot White Edition is TREASURE’s photobook album with a clean white design, CD, photobook, lyric cards, postcards, poster, and random photocard",
        price:900,
        image :[trea_a2,trea_a5,trea_a6],
        genre:"Kpop",
        category:"Album", 
    },
    {//justin bieber//
        _id: "m012",
        name:"The Believe",
        artis: "Justin Bieber",
        desciption:"The Believe vinyl is a 2‑LP reissue of Justin Bieber’s 2012 album, released in 2016 with premium packaging, lyric inserts, and all original tracks",
        price:200,
        image :[jb_a2],
        genre:"Pop",
        category:"Vinyl", 
    },
     {//justin bieber//
        _id: "m013",
        name:"The Boyfriend",
        artis: "Justin Bieber",
        desciption:"The Boyfriend CD single (2012) includes the hit track from Believe plus instrumental/remix versions, packaged in a jewel case with artwork and lyric insert",
        price:50,
        image :[jb_a6],
        genre:"Pop",
        category:"CD", 
    },
     {//justin bieber//
        _id: "m014",
        name:"The Believe",
        artis: "Justin Bieber",
        desciption:"The Believe vinyl is a 2‑LP reissue of Justin Bieber’s 2012 album, released in 2016 with premium packaging, lyric inserts, and all original tracks",
        price:200,
        image :[jb_a2],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//justin bieber//
        _id: "m015",
        name:"The Justice",
        artis: "Justin Bieber",
        desciption:"A global hit album featuring Peaches, Ghost, and Holy. Includes CD, lyric booklet, and artwork. Available in standard and deluxe editions.",
        price:400,
        image :[jb_a7],
        genre:"Pop",
        category:"Album", 
    },
    {//justin bieber//
        _id: "m016",
        name:"My World",
        artis: "Justin Bieber",
        desciption:"The My World vinyl (2016 reissue) is a 12-inch LP featuring all seven debut tracks, with lyric inserts and collectible packaging",
        price:120,
        image :[jb_a1],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Dua Lipa//
        _id: "m017",
        name:"Future Nostalgia (The Moonlight Edition)",
        artis: "Dua Lipa",
        desciption:"Celebrate the 5th anniversary of Future Nostalgia with this stunning special edition triple vinyl set. Including Future Nostalgia Moonlight Edition and Club Future Nostalgia.  This unique release features vibrant new artwork and a limited-edition splatter vinyl.",
        price:550,
        image :[dl_a1],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Dua Lipa//
        _id: "m018",
        name:"Dua Lipa(2017)",
        artis: "Dua Lipa",
        desciption:"The debut that started it all. Featuring global hits like “New Rules” and “IDGAF,” this CD comes with a lyric booklet and stunning artist photography.",
        price:60,
        image :[dl_a3],
        genre:"Pop",
        category:"CD", 
    },
    {//Dua Lipa//
        _id: "m019",
        name:"Future Nostalgia Bonus Edition",
        artis: "Dua Lipa",
        desciption:"Surreal moonlit visuals, lyric insert, and glossy sleeve",
        price:650,
        image :[dl_a4],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Maroon 5//
        _id: "m020",
        name:"The Red Pill Blues",
        artis: "Maroon 5",
        desciption:"Deluxe double LP featuring bold artwork and a mix of pop-rock tracks, pressed in collectible colored editions.",
        price:220,
        image :[m_a1],
        genre:"Pop",
        category:"Vinyl", 
    },
     {//Maroon 5//
        _id: "m021",
        name:"Singles",
        artis: "Maroon 5",
        desciption:"First greatest hits compilation, released in 2015, featuring 12 of their biggest tracks from 2002–2014",
        price:130,
        image :[m_a3],
        genre:"Pop",
        category:"CD", 
    },
     {//Maroon 5//
        _id: "m022",
        name:"V",
        artis: "Maroon 5",
        desciption:"Deluxe editions include bonus tracks like This Summer’s Gonna Hurt Like a Motherf**er*",
        price:850,
        image :[m_a4],
        genre:"Pop",
        category:"Album", 
    },
    {//Ariana Grande//
        _id: "m023",
        name:"Eternal Sunshine (Exclusive Cover No.2)",
        artis: "Ariana Grande",
        desciption:"This edition features a translucent ruby vinyl, a gatefold jacket, and an 8‑page 12”×12” booklet with lyrics and photos.",
        price:1200,
        image :[ag_a1],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Ariana Grande//
        _id: "m024",
        name:"Dangerous Woman",
        artis: "Ariana Grande",
        desciption:"Released as a 2 × LP set, often in standard black vinyl. Some limited pressings include colored variants.",
        price:750,
        image :[ag_a2],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Ariana Grande//
        _id: "m025",
        name:"Etrenal Sunshine(Ruby)",
        artis: "Ariana Grande",
        desciption:"A limited edition translucent ruby red LP featuring exclusive cover art, a gatefold jacket, and an 8‑page booklet with lyrics and photos.",
        price:1500,
        image :[ag_a5],
        genre:"Pop",
        category:"Vinyl", 
    },
    {//Awie//
        _id: "m026",
        name:"Awie",
        artis: "Awie",
        desciption:"His debut solo album, released right after his success with Wings, and it firmly established him as a Malaysian rock icon",
        price:80,
        image :[awie_a1],
        genre:"M-90s",
        category:"CD", 
    },
    {//Awie//
        _id: "m027",
        name:"Sayu",
        artis: "Awie",
        desciption:"Sayu is Awie’s third solo CD, showcasing his softer, emotional side compared to the raw rock energy of Wings.",
        price:100,
        image :[awie_a2],
        genre:"M-90s",
        category:"CD", 
    },
    {//Mazleela//
        _id: "m028",
        name:"Diam Tak Beerti Membisu",
        artis: "Mazleela",
        desciption:"Emotional ballads mixed with upbeat pop arrangements.",
        price:130,
        image :[mazleela_a1],
        genre:"M-90s",
        category:"CD", 
    },
    {//Exist//
        _id: "m029",
        name:"Exist",
        artis: "Exist",
        desciption:"a compilation album by the Malaysian band Exist.",
        price:50,
        image :[exist_a1],
        genre:"M-90s",
        category:"CD", 
    },
    {//Exist//
        _id: "m030",
        name:"Mutan",
        artis: "Exist",
        desciption:"One of Exist’s classic mid‑90s albums, cementing their place in Malaysia’s rock kapak scene with a balance of ballads and rock anthems.",
        price:100,
        image :[exist_a2],
        genre:"M-90s",
        category:"CD", 
    },
    {//XPDC//
        _id: "m031",
        name:"Kita Peng-Yu",
        artis: "XPDC",
        desciption:"A mix of heavy riffs and melodic ballads.",
        price:150,
        image :[xpdc_a1],
        genre:"M-90s",
        category:"CD", 
    },
    {//Yuna//
        _id: "m032",
        name:"Rouge",
        artis: "Yuna",
        desciption:"Blends pop and R&B with global collaborations, featuring singles like Forevermore, Blank Marquee (feat. G‑Eazy), and Pink Youth (feat. Little Simz).",
        price:300,
        image :[yuna_a1],
        genre:"Mpop",
        category:"Vinyl", 
    },
     {//Yuna//
        _id: "m033",
        name:"Chapters",
        artis: "Yuna",
        desciption:" limited edition import rather than a wide Malaysian release.",
        price:130,
        image :[yuna_a2],
        genre:"Mpop",
        category:"Vinyl", 
    },
     {//Yuna//
        _id: "m034",
        name:"",
        artis: "Yuna",
        desciption:"A dreamy pop‑R&B album in a jewel case with her minimalist portrait on the cover, a lyric booklet inside, and 12 tracks including Rescue, Falling, and Come Back.",
        price:80,
        image :[yuna_a3],
        genre:"Mpop",
        category:"CD", 
    },
    {//Insomniacks//
        _id: "m035",
        name:"Awake & Dreaming EP",
        artis: "insomniacks",
        desciption:" 5‑track pop‑rock project exploring themes of dreams, nightmares, and emotional struggles.",
        price:120,
        image :[insom_a1],
        genre:"Mpop",
        category:"Album", 
    },
    {//Insomniacks//
        _id: "m036",
        name:"Kepala Batu EP",
        artis: "insomniacks",
        desciption:"5‑track pop‑rock project exploring themes of dreams, nightmares, and emotional struggles.",
        price:130,
        image :[insom_a2],
        genre:"Mpop",
        category:"Album", 
    },
    {//Insomniacks//
        _id: "m037",
        name:"Teman EP",
        artis: "insomniacks",
        desciption:"A soundtrack for every friendship. Insomniacks' Teman EP is a collection of 8 songs that celebrate the bonds we share, the memories we make, and the bittersweet goodbyes.",
        price:209,
        image :[insom_a3],
        genre:"Mpop",
        category:"Vinyl", 
    },
    {//Dolla //
        _id: "m038",
        name:"New Classic",
        artis: "Dolla",
        desciption:"Album Box with Acrylic Outer Sleeve",
        price:99.90,
        image :[dolla_a1],
        genre:"Mpop",
        category:"Album", 
    },
    {//Dolla //
        _id: "m039",
        name:"Dolla:Mini Album",
        artis: "Dolla",
        desciption:"It features 7 tracks including Dolla Make You Wanna, Impikan, Berani, Bad, and Watch Me Glow.",
        price:150,
        image :[dolla_a2],
        genre:"Mpop",
        category:"Album", 
    },
     {//Alyph//
        _id: "m040",
        name:"The Storm vinyl",
        artis: "Alyph",
        desciption:"This exclusive vinyl edition of ALYPH's debut album The Storm is more than just music",
        price:199,
        image :[alyph_a1],
        genre:"Mpop",
        category:"CD", 
    },
    

]


const [cartItems, setCartItems] = useState({});

const addToCart = (itemId) => {
    
    let cartData = { ...cartItems };

    if (cartData[itemId]) {
        cartData[itemId] += 1;
    } else {
        cartData[itemId] = 1;
    }
    setCartItems(cartData);
    alert("Successfully added to cart!");
};
    
const value = { 
        musicItem, 
        cartItems, 
        addToCart,
        currency: "RM" 
    };

    return (
        <Musiccontext.Provider value={value}>
            {props.children}
        </Musiccontext.Provider>
    );

    
};

export default MusiccontextProvider; 

    