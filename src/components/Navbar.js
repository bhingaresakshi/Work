import React from 'react';


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img alt="Logo" className="logo" src="./images/logo.png" />
    </a>
    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            aria-expanded="false"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            id="galleryDropdown"
            role="button">
            Gallery
          </a>
          <ul aria-labelledby="galleryDropdown" className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#dropmenu1">
                Aari Work
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#dropmenu2">
                Fabric Painting
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reviews">
            Reviews
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
