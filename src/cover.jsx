import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css'

function Cover(){
  return (
    <div className="cover">
      <div className="pitch">Sustainablity<br /> in your Pocket</div>
      <div className="pitch2">Building a future thats exciting!</div>
      <div className="btn-frame">
        <button type="button" className="btn btn-primary">Explore</button>
      </div>
      <img alt="globe" src="https://static.wixstatic.com/media/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png/v1/fill/w_925,h_463,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png" />
    </div>
  );
}

export default Cover;