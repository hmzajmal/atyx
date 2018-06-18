import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
       <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/"> 
		<img src="img/logo.png" height="60px" width="150px" alt=""/></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
		   <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/">Home</a>
            </li> 
			  <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/what-we-do">What we do </a>
            </li>
			 <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/our-work">Our work </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;