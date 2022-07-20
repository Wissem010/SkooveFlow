/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../App';

// Note: test renderer must be required after react-native.
import {renderWithProviders} from '../utils/testUtils';


test('App snapshot', () => {
  const tree = renderWithProviders(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders App.js correctly', () => {
  renderWithProviders(<App />);
});
