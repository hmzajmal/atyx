import React from 'react';
import ReactDOM from 'react-dom';
import NewTechnologiesSection1 from './NewTechnologiesSection1';

it('NewTechnologiesSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTechnologiesSection1 />, div);
});