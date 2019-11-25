import React from 'react';
import './style/map.scss';

// import mapImage from './mars-map-desktop-res.jpg';

// function MarsMap() {
//     <picture>
//         <source media="(min-width: 768px)" srcset={mapImage}>

//     </picture>
// }



export function MarsMapImg() {
    const image = require('./mars-map-desktop-res.jpg');

   return <svg>
       <image href={image}></image>
   {/* <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /> */}
</svg>;
    
}