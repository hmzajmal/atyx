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
              <strong>Our Work</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">At Atyx.io, we provide products, services and solutions in three main areas:<br/><br/>

1. Systems and Software Development<br/>
2. Technology Consulting<br/>
3. New and Emerging Technologies<br/><br/>

We work with our clients to meticulously scope the tasks to be undertaken prior to commencing work and rigorously provide our deliveries within the client’s stipulated time and budget. Quality of our work is our uncompromising ethic and we strive to continuously exceed the expectations of our clients. Our team members have successfully worked with clients drawn from large multinational companies, universities, research institutes, SMEs and startups across Australia, USA, Singapore, South Korea, India and Saudi Arabia. 
<br/><br/>
See case studies below for examples of projects our team have successfully completed.
</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;