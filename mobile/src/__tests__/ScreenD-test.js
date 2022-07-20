import React from 'react';
import ScreenD from '../screens/ScreenD';
import {renderWithProviders} from '../utils/testUtils';

test('renders correctly', () => {
  const tree = renderWithProviders(<ScreenD />).toJSON();
  expect(tree).toMatchSnapshot();
});
