import React, {Component} from 'react';

import './NewTechnologiesSection1.css';

class NewTechnologiesSection1 extends Component {
  render() {
    return (
     <section >
   
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Machine Learning & AI</h4>
              <p class="text-muted mb-0">We provide solutions by developing machine/deep learning software libraries with different built-in support functionalities such as:<br/>
                <ul>
                  <li>Algorithm design and optimization</li>
                  <li>Scalability and analysis of complex, multiple data sets</li>
                  <li>Multiple types of learning problems, learning algorithms, models and representations</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Blockchain-based solutions</h4>
              <p class="text-muted mb-0">​We provide services in the following areas:<br/>
              <ul>
                <li>Building businesses around blockchain</li>
                <li>Software development of blockchain-based solutions</li>
                <li>Audits of smart contracts and programs for blockchain-based solutions</li>
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
              <h4 class="mb-3">Internet of Things (IoT)</h4>
              <p class="text-muted mb-0">We develop IoT software and systems, with commercial applications in:<br/>
              <ul>
                <li>Smart homes</li>
                <li>Smart security</li>
                <li>Monitoring and surveillance systems</li>
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

export default NewTechnologiesSection1;