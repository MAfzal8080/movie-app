import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Searchbox = (props) => {
  const [term, setTerm] = useState()
  const navigate =  useNavigate()
  const handleChange = (e)=>{
    setTerm(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    props.setSearch(term)
    if(term){
      navigate(`/search/${term}`)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <Link className="navbar-brand text-light" to="/">OMdb App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">About</Link>
        </li>
      </ul>
      <form className="d-flex position-relative justify-content-right" role="search" onSubmit={handleSubmit} style={{float:'right'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Searchbox
