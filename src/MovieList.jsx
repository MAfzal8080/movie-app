import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()
  const handleDetails = (id)=>{
    navigate(`/movie/${id}`)
  }

  return (
    <>
      {props.movie && props.movie.map((data, idx)=>{
        return (
          <div className="container text-light" key={idx} onClick={()=>{handleDetails(data.imdbID)}}>
            <div className="card border border-0" style={{width: '18rem'}} key={idx}>
              <img className="card-img-top" src={data.Poster} alt="Card" />
              <div className="card-body bg-dark">
                <h5 className="card-title">{data.Title}</h5>
                <p className="card-text">{data.Year}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Home
