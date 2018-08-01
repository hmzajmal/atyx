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
              <h4 class="mb-3">System and software prototyping</h4>
              <p class="text-muted mb-0">Developing system and software prototypes to enable rapid technology commercialisation</p>

            </div>
          </div>
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Cloud Based Solutions</h4>
              <p class="text-muted mb-0">Developing and implementing solutions, testing, evaluating and supporting different cloud architectures, off-the-shelf cloud products, cloud-based service models (e.g. SaaS, PaaS, IaaS) and cloud security</p>
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
              <p class="text-muted mb-0">Developing web-based systems, web-based applications and native Apps for different functional requirements to be supported on web-based architectures</p>
            </div>
          </div>
       </div>
      </div>
    </section>
	
    );
  }
}

export default SoftwareSystemsSection1;