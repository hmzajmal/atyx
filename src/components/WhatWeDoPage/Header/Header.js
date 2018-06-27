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
            <p class="text-faded mb-5">At Atyx.io, we develop cutting edge solutions in new and emerging areas of tech innovation. We help you, the client, develop competitive advantages, by building products and services that are well ahead of the status quo. We have an especially strong competency in developing system and software prototypes with commercial potential in rapidly evolving areas of technology.</p>
           
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;