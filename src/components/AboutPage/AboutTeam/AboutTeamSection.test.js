import React from 'react';
import ReactDOM from 'react-dom';
import AboutTeamSection from './AboutTeamSection';

it('WhatWeDoSection2 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhatWeDoSection2 />, div);
});