import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import "./styles.css";

var item_in_cart = 0;
var username = "Login/SignUp"

function Navbar(){
  return(
    <div className="navigation-bar">
      <nav className="navbar navbar-expand-lg py-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://static.wixstatic.com/media/272cf7_76258203c40940639e5df0ab1f940991~mv2.jpg/v1/crop/x_113,y_101,w_878,h_878/fill/w_78,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2022-100.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
            QIZAA
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Packaging</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lifestyle-Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Organic-Products</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="cart" href="#">
                  <img alt="cart" className="shopping-cart" src="https://img.icons8.com/glyph-neue/344/shopping-cart.png"/>
                  <span>{item_in_cart}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="account" href="#">
                  <img alt="user" className="user-pic" src="https://img.icons8.com/cotton/344/gender-neutral-user--v1.png" />
                  <span>{username}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;