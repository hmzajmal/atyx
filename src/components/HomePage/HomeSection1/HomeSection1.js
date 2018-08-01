import React, {Component} from 'react';

import './HomeSection1.css';

class HomeSection1 extends Component {
  render() {
    return (
      <section class="bg-primary" id="whatwedo">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">What we do</h2>
            <hr class="light my-4" />
            <p class="text-faded mb-4">We are a boutique technology consultancy with a focus on systems and software solutions. We work with a wide range of clientele, from small to medium sized enterprises, delivering custom solutions that solve real-world business problems. Whether we’re troubleshooting a legacy system or building a new solution from scratch, we create solutions that make life easier.</p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="/what-we-do">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
	
    );
  }
}

export default HomeSection1;