import React, {Component} from 'react';

import './HomeSection2.css';

class HomeSection2 extends Component {
  render() {
    return (
<section id="services">
   
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Software and Systems Development</h4>
              <p class="text-muted mb-0">Custom software solutions to boost productivity, harness insights and improve decision making.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Technology Consulting</h4>
              <p class="text-muted mb-0">Helping you choose, implement and deploy the best-fit solutions for any business process.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Vanguard Solutions</h4>
              <p class="text-muted mb-0">Development services for cutting edge technologies like artificial intelligence (AI), machine learning and blockchain solutions.</p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
    );
  }
}

export default HomeSection2;
