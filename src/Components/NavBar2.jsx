import React from 'react'
import { Link } from 'react-router-dom'

const NavBar2 = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#232f3e', color: 'white' }}>
  <div className="container-fluid" style={{}}>
    <Link className="navbar-brand" to="#">All</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Today's Deals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Customer Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Registry</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Gift Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Sell</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar2