import React from 'react';
//hämtar bilden på stjärnan och lägger den i en lista, kör därefter en for-loop som räknar stjärnorna baserat på filmens betyg
export default function Stars({ rating }) {
    const starImage = 'star.png';
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={starImage} alt="Star" />);
    }

    return <div>{stars}</div>;
}
