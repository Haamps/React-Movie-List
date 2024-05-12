import React, { useState } from 'react';
import Movie from './Movie';

//Sätter variabler på de olika värde som jag vill använda
export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);

    //funktion som sätter titeln på filmen
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    //funktion som sätter betyget på filmen
    function handleRatingChange(event) {
        setRating(parseInt(event.target.value));
    }

    //funktion som tar värdena och visar dem på hemsidan,
    //men som även kollar ifall användaren har lagt in både titel och betyg
    function handleSubmit(event) {
        event.preventDefault();
        if (title.trim() !== '' && rating !== 0) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, { id: newId, title, rating }]);
            setTitle('');
            setRating(0);
        } else {
            alert('Vänligen fyll i både titel och betyg! :)');
        }
    }

    //funktion som skapar delete-knappen
    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    //sorterar enligt filmens namn (i alfabetisk ordning)
    function sortAlphabetically() {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    }

    //sorterar enligt filmens rating
    function sortByRating() {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    }

    //html uppbyggnaden som jag så snyggt följde antons video! :B
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Titel:</p>
                <input
                    class="title-box"
                    type="text"
                    placeholder="Filmtitel..."
                    value={title}
                    onChange={handleTitleChange}
                />
                <div>
                <p>Betyg:</p>
                <select class="rating-box" value={rating} onChange={handleRatingChange}>
                    <option value={0}>Välj Betyg</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                </div>
                <div>
                <button class="submit-box" type="submit">Lägg till film</button>
                </div>
            </form>
            <div><h2>Tillagda filmer:</h2></div>
            <ul className="movie-group">
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        item={movie}
                        deleteMovie={deleteMovie}
                    />
                ))}
             </ul>
            {movies.length > 0 && (
                <div className="sorting-buttons">
                    <button class="sorting-button" onClick={sortAlphabetically}>Alfabetisk ordning</button>
                    <button class="sorting-button" onClick={sortByRating}>Betygsordning</button>
                </div>
            )}
        </div>
    );
}