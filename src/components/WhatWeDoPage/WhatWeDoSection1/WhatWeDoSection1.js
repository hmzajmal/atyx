import React, {Component} from 'react';

import './WhatWeDoSection1.css';

class WhatWeDoSection1 extends Component {
  render() {
    return (
     <section >
   
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Systems and Software Development</h4>
              <p class="text-muted mb-0">We provide hands-on design, development, testing and deployment services in the following areas:​<br/>
              <ul>
                <li>System and software prototyping</li>
                <li>Cloud-based solutions</li>
                <li>Web-based systems and Apps</li>
              </ul>
              </p>

            </div>
          </div>
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Technology Consulting</h4>
              <p class="text-muted mb-0">We provide technology consulting services to help our clients better implement systems and software within their organizations:<br/>
              <ul>
                <li>IT strategy</li>
                <li>IT strategy implementation</li>
                <li>Business process optimization</li>
              </ul>
              </p>
            </div>
          </div>
       </div>
      </div>
	   <div class="container">
        <div class="row">
        
          <div class="col-lg-12 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">New and Emerging Technologies</h4>
              <p class="text-muted mb-0">We provide technical advisory and hands-on design and development services for the following new and emerging technologies:
              <ul>
                <li>Internet of Things (IoT).</li>
                <li>Machine Learning and Artificial Intelligence.</li>
                <li>Blockchain-based solutions.</li>
              </ul>
              </p>
            </div>
          </div>
       </div>
      </div>
    </section>
	
    );
  }
}

export default WhatWeDoSection1;