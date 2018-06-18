import React from 'react';
import ReactDOM from 'react-dom';
import ContactSection1 from './ContactSection1';

it('ContactSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactSection1 />, div);
});