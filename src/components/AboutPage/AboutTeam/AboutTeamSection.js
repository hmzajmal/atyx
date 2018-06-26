import React, {Component} from 'react';

import './AboutTeamSection';

class AboutTeamSection extends Component {
  render() {
    return (
     <section >
   
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Dip Guha, Technical Director</h4>
              <h4 class="mb-3">M.Eng, MBA, LLM</h4>
              <p class="text-muted mb-0">Dip Guha is Atyx’s technical director, responsible for overseeing the implementation and delivery of all our projects. Dip is an experienced software engineer and systems architect with 11+ years of software design, development and delivery experience. Additionally, Dip has a background in patent law, with an LLM in intellectual property law from the University of Melbourne Law School. Dip’s prestigious academic and professional pedigree make him perfectly suited to oversee technical projects on a ‘big picture’ level.</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Sam T, Sales and Marketing</h4>
              <h4 class="mb-3">LLB, BBA</h4>
              <p class="text-muted mb-0">Sam T is our director of sales and marketing, responsible for finding, servicing and nurturing client accounts. Sam has extensive experience working with venture-backed technology companies as both a senior operational executive and as an advisor. He has led engagements across Australia for many software, internet and mobile companies, and is a a founding director at fast growing E-commerce start-up GowningStreet Pty.</p>
            </div>
          </div>
       </div>
      </div>
     <div class="container">
        <div class="row">
        
          <div class="col-lg-12 col-md-6 text-center">
            <div class="service-box mt-5 mx-auto">
              <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h4 class="mb-3">Kishan Arava, Operations Management</h4>
              <h4 class="mb-3">BEng, BCom</h4>
              <p class="text-muted mb-0">Kishan is our head of operations, responsible for ensuring the efficient operation of all core business functions. His role includes scheduling, systematizing and automating processes at the company, ensuring that projects are completed to specifications and well within the desired timeframe. Kishan has a background in mechanical engineering, and interests in AI, machine learning and programming languages.</p>
            </div>
          </div>
       </div>
      </div>
    </section>
  
    );
  }
}

export default AboutTeamSection;