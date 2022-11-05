import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function MovieDetails() {
    const params = useParams();
    console.log('params', params);

    useEffect(() => {

    }, [params.id]);
    
    return (
        <div>MovieDetails with movie id: {params.id}</div>
    );
}

export default MovieDetails;