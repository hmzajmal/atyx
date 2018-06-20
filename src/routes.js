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

/* Start WhatWeDo Page Components */
import WhatWeDoHeader from '././components/WhatWeDoPage/Header/Header';
import WhatWeDo from '././components/WhatWeDoPage/WhatWeDo/WhatWeDo';
import WhatWeDoSection1 from '././components/WhatWeDoPage/WhatWeDoSection1/WhatWeDoSection1';
import WhatWeDoSection2 from '././components/WhatWeDoPage/WhatWeDoSection2/WhatWeDoSection2';
/* End WhatWeDo Page Components */

/* Start OurWorkPage Page Components */
import OurWorkHeader from '././components/OurWorkPage/Header/Header';
import OurWorkSection1 from '././components/OurWorkPage/OurWorkSection1/OurWorkSection1';

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
      <Switch>
          <Route exact path="/" component={
			  props => <div > 	<Navbar /> <HomeHeader /> <HomeSection1 /> <HomeSection2 /><HomeSection3 /> <Footer /> </div>
			  
			  } />
          <Route path="/what-we-do" component={
        props => <div >   <Navbar /><WhatWeDoHeader /><WhatWeDoSection1/> <WhatWeDoSection2/> <Footer /> </div>
        } />
		 <Route path="/our-work" component={
			  props => <div > 	<Navbar /><OurWorkHeader /><OurWorkSection1/> <Footer /> </div>
			  } />			  
		<Route path="/contact" component={
			  props => <div > 	<Navbar /><ContactHeader /><ContactSection1/>  </div> 
			  } />
      </Switch>
  </BrowserRouter>
);
}
}

export default Routes;