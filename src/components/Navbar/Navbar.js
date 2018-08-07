import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <img src="img/logo.png" height="60px" width="150px" alt="" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink
                  className="nav-link js-scroll-trigger"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  activeClassName="active"
                  exact
                  to="/what-we-do"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  What we do<span class="caret" />
                </NavLink>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink
                      activeClassName="active"
                      exact
                      className="nav-item js-scroll-trigger"
                      to="/software-and-systems"
                    >
                      Software and Systems Development{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      exact
                      className="nav-item js-scroll-trigger"
                      to="/new-technologies"
                    >
                      New Technologies{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      exact
                      className="nav-item js-scroll-trigger"
                      to="/technology-consulting"
                    >
                      Technology Consulting{" "}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/about">
                  About{" "}
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/our-work">
                  Our work{" "}
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/careers">
                  Careers
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
