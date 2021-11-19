import React from 'react';
import style from './Task2.module.css';
import apparelImage from './images/apparel.jpg';
import calendarsImage from './images/calendars.jpg';
import cupsImage from './images/cups.jpg';
import postersImage from './images/posters.jpg';
import stickersImage from './images/stickers.jpg';

const carsData = [
    [postersImage, 'POSTERS'],
    [apparelImage, 'APPAREL'],
    [stickersImage, 'STICKERS'],
    [cupsImage, 'CUPS'],
    [calendarsImage, 'CALENDARS'],
];

function Card({ image, description }) {
    return (
        <div className={style.card}>
            <img src={image} alt={description} />
            <p>{description}</p>
        </div>
    );
}

function Task2() {
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <h3>Task 2</h3>
                <h1>CATEGORIES</h1>
                <div className={style.cardsList}>
                    {carsData.map(([image, description]) => (
                        <Card key={description} image={image} description={description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Task2;

/* TASK 2
Atkurkite šį komponentą: https://prnt.sc/1296ht1

Paveikslėliai:
- posters: https://per4mmedia.com/wp-content/uploads/2021/03/posters.jpg
- apparel" https://per4mmedia.com/wp-content/uploads/2021/03/apparel.jpg
- stickers: https://per4mmedia.com/wp-content/uploads/2021/03/stickers.jpg
- cups: https://per4mmedia.com/wp-content/uploads/2021/03/cups.jpg
- calendars" https://per4mmedia.com/wp-content/uploads/2021/03/calendars.jpg

Pastaba: paveikslėlius talpinti projekto aplanke.
*/
