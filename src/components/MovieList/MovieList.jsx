import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <nav className='navbar'>
            </nav>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div
                            className='card'
                            key={movie.id}
                            onClick={() => history.push(`/details/${movie.id}`)}
                        >
                            <img
                                className='moveListImage'
                                src={movie.poster}
                                alt={movie.title} />
                            <div className='container'>
                                <h3>{movie.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;