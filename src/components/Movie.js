
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
function Movie({id,cover_image,title,genres,summary}){
    return(
        <div>
            <hr/>
            <img src={cover_image} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3>장르</h3>
            <ul>
                {
                    (genres.length>0)?genres.map(
                            genre=><li key={genre}>{genre}</li>
                            )
                            :<h4>장르없음</h4>
                         
                }
            </ul>
            <p>{summary}</p> 
        </div>
    );
}
Movie.propTypes={
    cover_image: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    id:PropTypes.number
}
export default Movie;