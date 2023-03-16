import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieList from './MovieList'

const SearchFeed = () => {
    const {term} = useParams()
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(2)
    const [moreMovie, setMoreMovie] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      fetchMoreMovie()
      fetchMore()
    }, [term])
    
    const fetchMoreMovie = async ()=>{
        const movies = await axios.get(`https://omdbapi.com/?s=${term}&apikey=f4c9a0d7`)
        setMovie(movies.data.Search)
    }

    const fetchMore = async ()=>{
      const url = `https://omdbapi.com/?s=${term}&page=${page}&apikey=f4c9a0d7`
      const moreData = await axios.get(url)
      setMoreMovie(moreMovie.concat(moreData.data.Search))
      setPage(page+1)
    }

    const handleDetails = (id)=>{
      navigate(`/movie/${id}`)
    }

  return (
    <>
    <div className='container-fluid d-flex mt-3' style={{overflowX: 'auto', flexWrap:'nowrap'}}>
        <MovieList movie={movie} />
    </div>
    <div className="container row m-auto">
    {moreMovie.map((data, idx)=>{
        return (
          <div className="container text-light col-lg-3 col-lg-2 col-lg-1 my-2" key={idx}>
            <div className="card border border-0" style={{width: '18rem'}} key={idx} onClick={()=>{handleDetails(data.imdbID)}}>
              <img className="card-img-top" src={data.Poster} alt="Card" />
              <div className="card-body bg-dark">
                <h5 className="card-title">{data.Title}</h5>
                <p className="card-text">{data.Year}</p>
              </div>
            </div>
          </div>
        )
      })}
      <div className="container d-flex m-3">
        <button className='btn btn-primary m-auto' style={{width:'60px'}} onClick={fetchMore}>&#8681;</button>
      </div>
    </div>
    </>
  )
}

export default SearchFeed
