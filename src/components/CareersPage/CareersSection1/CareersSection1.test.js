import React from 'react';
import ReactDOM from 'react-dom';
import CareersSection1 from './CareersSection1';

it('CareersSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CareersSection1 />, div);
});