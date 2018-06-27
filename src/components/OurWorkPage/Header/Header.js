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
            <p class="text-faded mb-5">At Atyx.io, we provide high calibre services in three main areas: <br/><br/>

1. Software and systems development, including legacy system support.<br/>
2. Technology consulting and IT strategy.<br/>
3. New technology development, including blockchain, IoT and AI/machine learning.<br/><br/>

When we start on a project, our objective is to help you better utilize, develop and deploy technology to meet organizational objectives. We have a particular focus on product and service commercialization, having helped organizations as diverse as Fortune 500 companies, universities and start-ups in this area.
<br/><br/>
See case studies below for examples of projects we have successfully completed for our clients. 
</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;