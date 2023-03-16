import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

    const {id} =  useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
      fetchMore()
    }, [id])

    const fetchMore = async ()=>{
      const url = `https://www.omdbapi.com/?i=${id}&apikey=f4c9a0d7`
      const movies = await axios.get(url)
      setMovie(movies.data)
    }

  return (
    <div className='container d-flex mt-3'>
      <div className="container" style={{width:'400px'}}>
        <img src={movie.Poster} alt="img" />
      </div>
      <div className="container text-light">
        <h2>{movie.Title}</h2>
        <pre style={{overflowX:'wrap', wordWrap: 'break-word'}}>
        <p>      Actors: {movie.Actors}</p>
        <p>       Genre: {movie.Genre}</p>
        <p>    Language: {movie.Language}</p>
        <p>    Director: {movie.Director}</p>
        <p> IMdb rating: {movie.imdbRating}</p>
        <p> IMdb Voters: {movie.imdbVotes}</p>
        <p>Release date: {movie.Released}</p>
        <p>     Runtime: {movie.Runtime}</p>
        <p>      Awards: {movie.Awards}</p>
        <p>  Box Office: {movie.BoxOffice}</p>
        <p>     Country: {movie.Country}</p>
        <p>      Writer: {movie.Writer}</p>
        <p style={{maxWidth:'400px'}}>        Plot: {movie.Plot}</p>
        </pre>
      </div>
    </div>
  )
}

export default MovieDetails
