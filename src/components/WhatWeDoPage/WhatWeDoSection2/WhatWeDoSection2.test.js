import React from 'react';
import ReactDOM from 'react-dom';
import WhatWeDoSection2 from './WhatWeDoSection2';

it('WhatWeDoSection2 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhatWeDoSection2 />, div);
});