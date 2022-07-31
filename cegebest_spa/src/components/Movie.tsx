import { MovieType } from "../utils/types";
import bgImg from "../assets/images/family.png"

interface IMovieProps{
    movie:MovieType
}

function Movie (props:IMovieProps){
    const {movie} = props;
    
    return (
        <div className="movie-card" style={{backgroundImage: `url('${bgImg}')`}}>
            <div className="content">
                <h1>{movie.title}</h1>
                <footer>
                    <span>
                        {movie.vote_average}
                    </span>
                    <span>
                        {movie.release_date}
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default Movie;