import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render(props) {

	   
    return (
        /* <div className="callout primary" id="Header">
        <div className="row column">
          <h1>{this.props.name}</h1>
        </div>
      </div>
	  */
	  <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>About Us</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">We are Atyx.io. We are a team of engineers and technologists with extensive experience in new product and service commercialization. Our team brings a diverse set of skills to the table, including software engineering, product development, programming, and patent law. This varied skill set gives us the unique ability to serve you at different stages of the product%2Fservice commercialization process, from idea conception to product launch and beyond.<br/><br/>See below to read about our team members, their unique backgrounds and skill sets.
</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;