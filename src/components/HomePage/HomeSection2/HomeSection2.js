import React, { Component } from "react";

import "./HomeSection2.css";

class HomeSection2 extends Component {
  render() {
    return (
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <img
                  class="icons mb-3 sr-icons"
                  src={require("../../../icons/software.svg")}
                />
                <h4 class="mb-3">Systems and Software Development</h4>
                <p class="text-muted mb-0">
                  Custom software solutions to boost productivity, improve
                  analytics and improve decision making.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <img
                  class="icons mb-3 sr-icons"
                  src={require("../../../icons/technology.svg")}
                />
                <h4 class="mb-3">Technology Consulting</h4>
                <p class="text-muted mb-0">
                  Helping you choose, implement and deploy the best technologies
                  for any business process.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <img
                  class="icons mb-3 sr-icons"
                  src={require("../../../icons/Vangard.svg")}
                />

                <h4 class="mb-3">Vanguard Solutions</h4>
                <p class="text-muted mb-0">
                  Development services for cutting edge technologies like
                  artificial intelligence (AI), Internet of Things (IoT) and
                  blockchain solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection2;
