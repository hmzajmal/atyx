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
              <strong>Contact</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Have questions about Atyx.io? <br/>

Want to learn more about our services? <br/>

Interested in retaining us for a project, or working together on a collaboration? <br/><br/>

At Atyx, we welcome any and all inquiries. Whether you want to hire us, learn more about our services, or just chat about our areas of expertise, we’re here for you. We can be reached by email using the form below, or at any of the contact options provided. 
</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;