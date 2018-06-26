import React, {Component} from 'react';

import './CareersSection1.css';

class CareersSection1 extends Component {
  render() {
    return (	 <section class="bg-primary" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">Atyx may be just the opportunity you’re waiting for</h2>
            <hr class="light my-4" />
            <p class="text-faded mb-4">We are an experienced team of engineers and technologists with extensive experience in software development and business systems. We have expertise in all areas of product and service commercialization, from software development to patent law. Our clientele includes Fortune 500 companies, universities, research institutes, SMEs and start-ups.</p>
			
             <p class="text-faded mb-4">We’re always looking for talented software, business and sales people to join our team. All positions are in our head office in Melbourne, Australia, and offer competitive compensation, generous benefits and great work-life balance. See below for currently open positions. To apply, send us an email to [INSERT EMAIL ADDRESS HERE] with your resume and CV attached.
             </p>
           
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default CareersSection1;