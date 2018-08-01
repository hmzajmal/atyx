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
            <p class="text-faded mb-5">At Atyx.io, we develop cutting edge solutions in new and emerging areas of technology innovation. Our knowledge in software development processes, expertise in implementing software design and experience in delivering complex solutions enable our clients to continuously stay ahead in the technology life cycle. Our competency lies in developing system and software prototypes to enable product/service commercialization. We also have capabilities in providing IT strategy advisory, business process optimization and developing custom IT/software solutions to an organization’s business requirements.</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;