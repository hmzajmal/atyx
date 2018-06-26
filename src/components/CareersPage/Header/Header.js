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
              <strong>Careers</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Are you a software developer, technical sales professional or business process expert? Are you interested in a career that puts you on the forefront of IT service and development?</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;