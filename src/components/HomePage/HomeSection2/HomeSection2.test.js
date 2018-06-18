import React from 'react';
import ReactDOM from 'react-dom';
import HomeSection2 from './HomeSection2';

it('HomeSection2 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSection2 />, div);
});