import React, {Component} from 'react';

import './WhatWeDoSection2.css';

class WhatWeDoSection2 extends Component {
  render() {
    return (
      <section class="bg-primary" >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">Technologies</h2>
            <hr class="light my-4" />
            <p class="text-faded mb-4">Mostly driven by curiosity, below is a list of our
top technologies, and technologies we will work with.</p>
			
             <p class="text-faded mb-4">
			 <img src="img/technologies.jpg" width="100%" alt="" / >
			 
			 </p>
           
          </div>
        </div>
      </div>
    </section>
	
    );
  }
}

export default WhatWeDoSection2;