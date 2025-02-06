import React from 'react'
import logo from '../Assest/logo-light.png'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img src={logo} alt='logo' width='200' height={50} className='d-inline-block align-text-top' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100 d-flex justify-content-evenly">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/home">HOME</a>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="/product" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCT
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/mobiledev">Mobile App Development</a></li>
                  <li><a className="dropdown-item " href="/webdev">Web Development</a></li>
                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link text-light" href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar