import { PopularMovie } from "../utils/types";
import bgImg from "../assets/images/family.png"
import { POSTER_API } from "../utils/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


interface IMovieProps{
    movie:PopularMovie
}

function MovieCard (props:IMovieProps){
    const {movie} = props;
    const imgWidth = 500;
    
    return (
        <div className="movie-card" style={{backgroundImage: `url('${POSTER_API}/w${imgWidth}${movie.posterPath}')`}}>
            <div className="content">
                <h1>{movie.title}</h1>
                <footer>
                    <span>
                        {movie.voteAverage} &nbsp;
                        <FontAwesomeIcon style={{color: "#FFD700"}} icon={faStar} />
                    </span>
                    <span>
                        {movie.releaseDate}
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default MovieCard;