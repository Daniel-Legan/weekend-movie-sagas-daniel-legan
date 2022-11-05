import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

    console.log('params', params); // { id: '17' } as an example

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    }, [params.id]);

    return (
        <main>
            <h1>MovieDetails</h1>
            <section>
                <button onClick={() => history.push('/')}>Back</button>
                <p><b>Movie Title: </b>{movieDetails.title}</p>
                <img src={movieDetails.poster} />
                <p><b>Movie Description: </b>{movieDetails.description}</p>
                <p><b>Movie Genres: </b></p>
                {/* 

                IMPORTANT! 
                without conditional, .map() has undefined initially
                takes a bit to retrieve array with useSelector 

                */}
                {movieDetails.genres &&
                    movieDetails.genres.map(item => (
                        <p key={item.id}>{item.name}</p>
                    ))}
            </section>

        </main>
    );
}

export default MovieDetails;