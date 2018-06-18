import React from 'react';
import ReactDOM from 'react-dom';
import HomeSection3 from './HomeSection3';

it('HomeSection3 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSection3 />, div);
});