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
              <strong>What we do</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">We work with organizations to deploy cutting-edge solutions in areas of highly emergent innovation. We help organizations derive competitive advantage by helping them build novel products and services around evolving technology. In particular, we are experts in developing rapid system and software prototypes for commercial adoption of evolving technologies.</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;