import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import formatTemperature from '../../helpers/FormatTemperature';

describe('Formats Temperature Number Correctly', () => {
    
    expect(formatTemperature("dave")).toBe("N/A");

  });