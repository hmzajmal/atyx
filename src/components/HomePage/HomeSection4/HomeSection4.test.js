import React from 'react';
import ReactDOM from 'react-dom';
import HomeSection4 from './HomeSection4';

it('HomeSection4 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSection4 />, div);
});