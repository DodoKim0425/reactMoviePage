import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import MovieDetail from "../components/MovieDetail"
function Detail(){
    const {id}=useParams();
    const[movieDetail,setMovieDetail]=useState([]);
    const[loading,setLoading]=useState(true)
    const getDetail=async()=>{
        const json=await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
        setLoading(false)
    }
    useEffect(()=>{
        getDetail();
    },[])

    return(
        <div>
            {loading?<h1>Loading...</h1>:
                <MovieDetail 
                    poster={movieDetail.medium_cover_image}
                    title={movieDetail.title}
                    genres={movieDetail.genres}
                    lan={movieDetail.language}
                    likes={movieDetail.like_count}
                    runtime={movieDetail.runtime}
                    description={movieDetail.description_intro}
                />
            }
            
        </div>
    )
}
export default Detail;