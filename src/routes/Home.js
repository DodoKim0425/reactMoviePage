import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css"
function Home(){
    const [loading,setLoading]=useState(true)//로딩중 표시
    const[movies,setMovies]=useState([])//api에서 받아온 영화들을 담는 리스트
    const getMovies=async()=>{
        const json=await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&&sort_by=year`)
        ).json();
    
        setMovies(json.data.movies);//api에서 받아온 영화 리스트를 movies리스트에 넣음
        setLoading(false);//api에서 영화 받아오기 끝났으니 로딩 끝
    }
  
    useEffect(()=>{
        getMovies()
    },[])
  
    return(
    <div className={styles.container}>
        {loading?<h1 className={styles.loader}>Loading...</h1>:
        <div className={styles.movies}>
            {movies.map((movie)=>
                <Movie 
                key={movie.id}
                id={movie.id}
                cover_image={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
                />
            )}
        </div>
        }
    </div>)
  
}
export default Home;