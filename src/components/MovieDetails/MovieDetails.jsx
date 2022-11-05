import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    console.log('params', params); // { id: '17' } as an example

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id
        })
    }, [params.id]);

    return (
        <div>MovieDetails with movie id: {params.id}</div>
    );
}

export default MovieDetails;