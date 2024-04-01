import React from 'react';
import logo from '../assets/images/logo.svg'

export default function navbar() {
  return (
    <div className='navbar-container'>
      <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand " href="#"><img src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-main" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Popular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
