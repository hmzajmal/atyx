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
              <strong>Systems and Software Development</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Development is at the core of our service offerings. Whether it’s building software applications from the ground up, or improving existing systems to meet particular business needs, we’re always striving to push the boundaries of systems and software development.<br/><br/>Our software and systems development service areas include:</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;