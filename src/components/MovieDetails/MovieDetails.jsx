import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const params = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();


    console.log('params', params); // { id: '17' } as an example

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    }, [params.id]);

    console.log('movieDetails', movieDetails);

    return (
        <>
            {/* <div>MovieDetails with movie id: {params.id}</div> */}
            <p><b>Movie Title: </b>{movieDetails.title}</p>
            <img src={movieDetails.poster} />
            <p><b>Movie Description: </b>{movieDetails.description}</p>
            <p><b>Movie Genres: </b></p>
            {/* IMPORTANT! without conditional, .map() has undefined initially, takes a bit to retrieve array with useSelector */}
            {movieDetails.genres && movieDetails.genres.map(item => (<p key={item.id}>{item.name}</p>))}
        </>
    );
}

export default MovieDetails;