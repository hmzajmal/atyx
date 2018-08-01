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
              <strong>Technology Consulting</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">At Atyx.io, we are highly passionate about technology and its adaptation in business and society. Whether it’s developing software, managing legacy systems, or implementing new systems, technology is at the forefront of everything we do. We draw on this extensive experience in our technology consulting practice to help you reach your organizational objectives through correct fit of IT and business strategy.
            </p>          
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;