import React from "react";
import logo from "../assets/logo-image.png";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext'; 

const NavCompo = () => {
   const { cart } = useContext(CartContext);
  return (
    <>
   <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'white' }}>
      <div className="container-fluid  " >
        <div className="row py-3 border-bottom justify-content-between">
          <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
            <div className="d-flex align-items-center my-3 my-sm-0">
              <a href="#">
                <img src={logo} alt="logo"  className="img-fluid" />
              </a>
            </div>
        </div>
          <div className="col-lg-4">
      <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
        <li className="nav-item active">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/single-product" className="nav-link">Products</Link>
        </li>
      </ul>
    </div>
          <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="p-2 mx-1">
                  <i className="fas fa-user" style={{ fontSize: '20px' ,color:'black' }}></i>
                </a>
                
              </li>
              <li className="nav-item">
          <Link to="/cart" className="nav-link">
           <i className="fas fa-cart-plus mr-5" style={{ fontSize: '20px', color: 'black' }}></i>
            <span className="badge text-dark"  style={{ fontSize: '15px'}}>{cart.length}</span>
          </Link>
        </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
    </>
  );
};

export default NavCompo;
