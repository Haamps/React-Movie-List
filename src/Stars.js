import React from 'react';

export default function Stars({ rating }) {
    const starImage = 'star.png';
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={starImage} alt="Star" />);
    }

    return <div>{stars}</div>;
}