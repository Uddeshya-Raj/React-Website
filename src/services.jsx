import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';

function Services(){
  return (
    <div className="services">
      <h1 className="title">WHAT WE OFFER</h1>
      <div className="subtitle">Qizaa is an All In One platform for Sustainable Products, B2B Sustainable Services,
      <br />and Community Programs for a Sustainable Lifestyle.</div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <div className="img-placeholder">
                <img className="card-img" alt="" src="https://static.wixstatic.com/media/272cf7_85bd2da00ccf4d9a86f2eda94b19111a~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sustainability.png" />
              </div>
              <h5 class="card-title">Sustainable Products</h5>
              <p class="card-text">Buy sustainable zero-waste products from best brands.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <div className="img-placeholder">
                <img className="card-img" alt="" src="https://static.wixstatic.com/media/272cf7_40028ca4a08346769adf960399e7b010~mv2.png/v1/fill/w_89,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_40028ca4a08346769adf960399e7b010~mv2.png" />
              </div>
              <h5 class="card-title">B2B Services</h5>
              <p class="card-text">Buy sustainable zero-waste products from best brands.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <div className="img-placeholder">
                <img className="card-img" alt="" src="https://static.wixstatic.com/media/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png" />
              </div>
              <h5 class="card-title">Our Community</h5>
              <p class="card-text">Introducing sustainable culture in all communities. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;