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
              <h4 class="mb-3">Software and Systems Development</h4>
              <p class="text-muted mb-0">We provide agile development services in the following areas:​<br/>
              <ul>
                <li>Rapid prototyping</li>
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
                <li>IT system implementation.</li>
                <li>R&D advisory.</li>
                <li>Solution options.</li>
                <li>Problem management, diagnosis and recovery.</li>
                <li>IT assessment.</li>
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
              <h4 class="mb-3">New Technologies</h4>
              <p class="text-muted mb-0">We provide support for new and up-and coming technologies, in both advisory and development capacity.
              <ul>
                <li>Business Process Improvement.</li>
                <li>Machine Learning and AI.</li>
                <li>Internet of Things (IoT).</li>
                <li>Computer Vision.</li>
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