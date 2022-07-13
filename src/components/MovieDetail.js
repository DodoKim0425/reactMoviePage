import styles from "../css/MovieDetail.module.css"
function MovieDetail({poster,title,genres,lan,likes,runtime,description}){
    return (
    <div >
        <div className={styles.image_container}>
            <img src={poster}></img>
        </div>
        
        <h1 className={styles.title}>{title}</h1>
        <hr/>
        <div>
            <h2>Language</h2>
            <div>{lan}</div>
            <h2>Likes</h2>
            <div>{likes}</div>
            <h2>Runtime</h2>
            <div>{runtime}</div>
        </div>
        <hr/>
        <h2>Description intro</h2>
        <div>{description}</div>
    </div>
    )
    
}

export default MovieDetail;