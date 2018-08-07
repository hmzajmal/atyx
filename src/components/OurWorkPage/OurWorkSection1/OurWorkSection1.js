import React, { Component } from "react";

import "./OurWorkSection1.css";

class OurWorkSection1 extends Component {
  render() {
    return (
      <section>
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">Project Case Studies</h2>
          <hr class="my-4" />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons" />
                <h4 class="mb-3">
                  Case Study #1: Novel Asynchronous Event-Driven Hardware
                  Solution
                </h4>
                <p class="text-muted mb-0">
                  We delivered a novel asynchronous event-driven hardware
                  solution that helps reduce battery life of mobile phones.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons" />
                <h4 class="mb-3">Case Study #2: Custom SoC Core Blocks</h4>
                <p class="text-muted mb-0">
                  We delivered different custom SoC (System on Chip) IP
                  (Intellectual Property) core blocks for different applications
                  (e.g. UWB (ultra wide band) communications PHY-MAC system
                  hardware, multiprocessor-on-chip, asynchronous FPGA
                  architectures, low power coding, sensor design)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons" />
                <h4 class="mb-3">
                  Case Study #3: Networking Systems and Software Solutions
                </h4>
                <p class="text-muted mb-0">
                  In a long term project, we delivered networking systems and
                  software solutions in the domains of data communications,
                  traffic engineering, switching systems, IP-optical networks,
                  flow-based routing, multimedia processing and on-demand
                  network provisioning
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                {/* <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i> */}
                <img
                  class="icons"
                  src={require("../../../icons/Blockchain.svg")}
                />

                <h4 class="mb-3">Case Study #4: Cryptography Solutions</h4>
                <p class="text-muted mb-0">
                  We delivered different solutions in the domain of cryptography
                  with respect to peer-to-peer networking and trust-based
                  distributed computing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurWorkSection1;
