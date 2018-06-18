import React from 'react';
import ReactDOM from 'react-dom';
import HomeSection1 from './HomeSection1';

it('HomeSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSection1 />, div);
});