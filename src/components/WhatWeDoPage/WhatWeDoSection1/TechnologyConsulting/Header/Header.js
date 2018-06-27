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
            <p class="text-faded mb-5">At Atyx, we eat, breathe and sleep technology. It’s in our DNA. Whether it’s developing software, managing legacy systems, or implementing new systems, technology is at the forefront of everything we do. We draw on this extensive experience in our technology consulting practice, where we help you reach your organizational objectives through IT-and-business strategy.<br/><br/>
            Our technology consulting services are diverse and wide-ranging. We work with organizations to help determine the best use of their IT budget. We work with companies to develop technology platforms for new ventures. We provide guidance for businesses working with legacy systems or seeking to upgrade to newer systems. And we offer comprehensive evaluations for businesses that need a ‘second set of eyes’ for ideas they’re considering implementing.<br/><br/>
            In all areas of our technology consulting practice, we draw on extensive experience, proven expertise and consummate professionalism to ensure favourable outcomes for our clients and partners.
            </p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;