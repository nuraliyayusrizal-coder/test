{/* to store artis context to display on artis page */}
import React from "react";
import { createContext } from "react";
import blackpink1 from '../assets/blackpink1.jpg';
import bts from '../assets/bts.jpg';
import treasure from '../assets/treasure.jpg';
import twice from '../assets/twice.jpg';
import justin from '../assets/justin.jpg';
import dua from '../assets/dua.jpg';
import maroon from '../assets/maroon.jpg';
import arianagrande from '../assets/arianagrande.jpg';
import exist from '../assets/exist.png';
import awie from '../assets/awie.jpg';
import mazleela from '../assets/mazleela.jpg';
import xpdc from '../assets/xpdc.jpg';
import yuna from '../assets/yuna.jpg';
import insom from '../assets/insom.jpg';
import dolla from '../assets/dolla.jpg';
import alyph from '../assets/alyph.png';

export const Artiscontext = createContext();
export const ArtiscontextProvider = (props) => {
    const artisdata = [
        {id:1, name:"Blackpink", img:blackpink1 , genre:"kpop"},
        {id:2, name:"BTS", img:bts, genre:"kpop"},
        {id:3, name:"Treasure", img:treasure, genre:"kpop"},
        {id:4, name:"Twice", img:twice, genre:"kpop"},
        {id:5, name:"Justin Bieber", img:justin, genre:"pop"},
        {id:6, name:"Dua Lipa", img:dua, genre:"pop"},
        {id:7, name:"Maroon 5", img:maroon, genre:"pop"},
        {id:8, name:"Ariana Grande", img:arianagrande, genre:"pop"},
        {id:9, name:"Exist", img:exist, genre:"M-90s"},
        {id:10, name:"Awie", img:awie, genre:"M-90s"},
        {id:11, name:"Mazleela", img:mazleela, genre:"M-90s"},
        {id:12, name:"XPDC", img:xpdc, genre:"M-90s"},
        {id:13, name:"Yuna", img:yuna, genre:"Mpop"},
        {id:14, name:"Insomniacks", img:insom, genre:"Mpop"},
        {id:15, name:"Dolla", img:dolla, genre:"Mpop"},
        {id:16, name:"Alyph", img:alyph, genre:"Mpop"},
    ];
    return (
        <Artiscontext.Provider value={{artisdata}}>
            {props.children}
        </Artiscontext.Provider>
    );
};



