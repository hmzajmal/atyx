import React from 'react';
import ReactDOM from 'react-dom';
import SoftwareSystemsSection1 from './SoftwareSystemsSection1';

it('SoftwareSystemsSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoftwareSystemsSection1 />, div);
});