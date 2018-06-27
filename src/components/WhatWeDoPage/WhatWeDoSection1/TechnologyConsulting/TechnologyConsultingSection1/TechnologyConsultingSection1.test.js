import React from 'react';
import ReactDOM from 'react-dom';
import TechnologyConsultingSection1 from './TechnologyConsultingSection1';

it('TechnologyConsultingSection1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TechnologyConsultingSection1 />, div);
});