import React from 'react';
import ReactDOM from 'react-dom';
import WhatWeDo from './WhatWeDo';

it('WhatWeDo renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhatWeDo />, div);
});