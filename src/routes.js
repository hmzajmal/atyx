import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header/Header';


import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';

/* Start Common Components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
/* End Common Components */
/* Start Home Page Components */
import HomeHeader from '././components/HomePage/Header/Header';
import HomeSection1 from '././components/HomePage/HomeSection1/HomeSection1';
import HomeSection2 from '././components/HomePage/HomeSection2/HomeSection2';
import HomeSection3 from '././components/HomePage/HomeSection3/HomeSection3';
import HomeSection4 from '././components/HomePage/HomeSection4/HomeSection4';
/* End Home Page Components */

/* Start AboutPage Page Components */
import AboutHeader from '././components/AboutPage/Header/Header';
import AboutTeamSection from '././components/AboutPage/AboutTeam/AboutTeamSection';

/* Start WhatWeDo Page Components */
import WhatWeDoHeader from '././components/WhatWeDoPage/Header/Header';
import WhatWeDo from '././components/WhatWeDoPage/WhatWeDo/WhatWeDo';
import WhatWeDoSection1 from '././components/WhatWeDoPage/WhatWeDoSection1/WhatWeDoSection1';
import WhatWeDoSection2 from '././components/WhatWeDoPage/WhatWeDoSection2/WhatWeDoSection2';
import SoftwareSystemsHeader from '././components/WhatWeDoPage/WhatWeDoSection1/SoftwareSystems/Header/Header'
import SoftwareSystemsSection1 from '././components/WhatWeDoPage/WhatWeDoSection1/SoftwareSystems/SoftwareSystemsSection1/SoftwareSystemsSection1'
import NewTechnologiesHeader from '././components/WhatWeDoPage/WhatWeDoSection1/NewTechnologies/Header/Header'
import NewTechnologiesSection1 from '././components/WhatWeDoPage/WhatWeDoSection1/NewTechnologies/NewTechnologiesSection1/NewTechnologiesSection1'
import TechnologyConsultingHeader from '././components/WhatWeDoPage/WhatWeDoSection1/TechnologyConsulting/Header/Header'
import TechnologyConsultingSection1 from '././components/WhatWeDoPage/WhatWeDoSection1/TechnologyConsulting/TechnologyConsultingSection1/TechnologyConsultingSection1'


/* End WhatWeDo Page Components */

/* Start OurWorkPage Page Components */
import OurWorkHeader from '././components/OurWorkPage/Header/Header';
import OurWorkSection1 from '././components/OurWorkPage/OurWorkSection1/OurWorkSection1';

/* Start CareersPage Page Components */
import CareersHeader from '././components/CareersPage/Header/Header';
import CareersSection1 from '././components/CareersPage/CareersSection1/CareersSection1';

/* Start ContactPage Page Components */
import ContactHeader from '././components/ContactPage/Header/Header';
import ContactSection1 from '././components/ContactPage/ContactSection1/ContactSection1';
/* End ContactPage Page Components */


import MobileHeader from './components/MobileHeader/MobileHeader';
import Sidebar from './components/Sidebar/Sidebar';
class Routes extends Component {
 constructor(){
    super();
    this.state={ 
      appName: "Test"
    }
  }
  render() {
    return (
  <BrowserRouter >
      <div>
      <Navbar />
        <Route exact path="/" component={
        props => <div >   <HomeHeader /> <HomeSection1 /> <HomeSection2 /><HomeSection3 /> <Footer /> </div>
        } />
        <Route exact path="/about" component={
			  props => <div > 	<AboutHeader /> <AboutTeamSection /> <Footer /> </div>
			  } />
        <Route exact path="/what-we-do" component={
        props => <div >   <WhatWeDoHeader /><WhatWeDoSection1/> <WhatWeDoSection2/> <Footer /> </div>
        } />
        <Route path="/our-work" component={
        props => <div >   <OurWorkHeader /><OurWorkSection1/> <Footer /> </div>
        } />  
        <Route path="/careers" component={
			  props => <div > 	<CareersHeader /><CareersSection1/> <Footer /> </div>
			  } />			  
		    <Route path="/contact" component={
        props => <div >   <ContactHeader /><ContactSection1/>  </div> 
        } />
        <Route path="/software-and-systems" component={
        props => <div >   <SoftwareSystemsHeader /><SoftwareSystemsSection1/> <Footer />  </div> 
        } />
        <Route path="/new-technologies" component={
        props => <div >   <NewTechnologiesHeader /><NewTechnologiesSection1/> <Footer />  </div> 
        } />
        <Route path="/technology-consulting" component={
			  props => <div > 	<TechnologyConsultingHeader /><TechnologyConsultingSection1/> <Footer />  </div> 
			  } />
      </div>
  </BrowserRouter>
);
}
}

export default Routes;