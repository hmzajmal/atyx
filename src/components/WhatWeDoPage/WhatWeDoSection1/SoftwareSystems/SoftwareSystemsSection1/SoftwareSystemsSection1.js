import React, {Component} from 'react';

import './SoftwareSystemsSection1.css';

class SoftwareSystemsSection1 extends Component {
  render() {
    return (
     <section >
   
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Rapid Prototyping</h4>
              <p class="text-muted mb-0">Developing software prototypes with the goal of commercial release.</p>

            </div>
          </div>
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Cloud Based Solutions</h4>
              <p class="text-muted mb-0">Development of, and support for, cloud-based technology, such as SaaS applications and cloud storage.</p>
            </div>
          </div>
       </div>
      </div>
	   <div class="container">
        <div class="row">
        
          <div class="col-lg-12 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Web-based Systems and Apps</h4>
              <p class="text-muted mb-0">Developing web-based systems and applications, both for commercial release and for internal use inside companies.</p>
            </div>
          </div>
       </div>
      </div>
    </section>
	
    );
  }
}

export default SoftwareSystemsSection1;