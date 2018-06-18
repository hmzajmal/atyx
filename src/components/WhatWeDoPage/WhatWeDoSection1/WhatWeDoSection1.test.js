import React from 'react';
import ReactDOM from 'react-dom';
import WhatWeDoSection1 from './WhatWeDoSection1';

it('WhatWeDoSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhatWeDoSection1 />, div);
});