import React, {Component} from 'react';

import './HomeSection3.css';

class HomeSection3 extends Component {
  render() {
    return (	 <section class="bg-primary" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">About Us</h2>
            <hr class="light my-4" />
            <p class="text-faded mb-4">We are an experienced team of engineers and technologists with extensive experience in software development and business systems. We have expertise in all areas of product and service commercialization, from software development to patent law. Our clientele includes Fortune 500 companies, universities, research institutes, SMEs and start-ups.</p>
			
             <p class="text-faded mb-4">Our wide-ranging experience positions us perfectly to provide custom software solutions for organizations in any industry or vertical. Not only can build you a technical solution, but we can integrate our solutions with your company's operational, marketing and financial objectives. </p>
           
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default HomeSection3;