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
              <strong>New and Emerging Technologies</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">At Atyx.io we stay abreast of tech trends in order to be able to give our clients the very best service in building solutions on cutting edge areas of emerging technologies. From blockchain-based solutions to AI and Machine learning, we are fully capable to provide development, testing and support services for new and emerging technologies.</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;