import React, {Component} from 'react';

import './ContactSection1.css';

class ContactSection1 extends Component {
  render() {
    return (
     <section >
	   <div class="container">
        <div class="row">
        
          <div class="col-lg-12 col-md-12 text-center">
            <div class="mt-12 mx-auto">
              <h4 class="mb-3">[INSERT PHONE NUMBER AND MAILING ADDRESS HERE]</h4>
              <h4 class="mb-3">[INSERT CONTACT FORM HERE]</h4>
              <p class="text-muted mb-0">Note: If you’re reaching out by phone, our business hours at ____ to _____ [INSERT TIME ZONE HERE]. If you reach us outside of normal business hours, you can leave a voice message and we’ll make sure to reply on the next business day. We will respond to all email inquiries within 24 hours or 1 business day.</p>
            </div>
          </div>
       </div>
      </div>
    </section>
	
    );
  }
}

export default ContactSection1;