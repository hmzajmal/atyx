import React from 'react';
import ReactDOM from 'react-dom';
import OurWorkSection1 from './OurWorkSection1';

it('OurWorkSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OurWorkSection1 />, div);
});