import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
      <a className="navbar-brand js-scroll-trigger" href="/"> 
		  <img src="img/logo.png" height="60px" width="150px" alt=""/></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
		      
          <li class="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
          </li>
			    <li class="nav-item dropdown">
          <Link to="/what-we-do" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">What we do<span class="caret"></span></Link>
          <ul class="dropdown-menu">
            <li><Link className="nav-item js-scroll-trigger" to="/software-and-systems">Software and Systems Development </Link></li>
            <li><Link className="nav-item js-scroll-trigger" to="/new-technologies">New Technologies </Link></li>
            <li><Link className="nav-item js-scroll-trigger" to="/technology-consulting">Technology Consulting </Link></li>
          </ul>
          </li>
          <li class="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/about">About </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/our-work">Our work </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/careers">Careers</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
          </li>
          
          
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;