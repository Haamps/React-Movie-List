import React from 'react';

export default function Movie(props) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < props.item.rating; i++) {
            stars.push(<img key={i} src="./star.png" alt="Star" />);
        }
        return stars;
    };

    return (
        <li className="movie-group-item">
           
            <div className="movie-title">
                {props.item.title}
            </div>
            <div className="stars-container">
                {renderStars()}
            </div>
            <button className="btn btn-sm btn-danger delete-button" onClick={() => props.deleteMovie(props.item.id)}>Delete</button>
        </li>
    );
}