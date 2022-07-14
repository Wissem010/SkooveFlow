import React from 'react';
import renderer from 'react-test-renderer';
import ScreenD from '../screens/ScreenD';

test('renders correctly', () => {
  const tree = renderer.create(<ScreenD />).toJSON();
  expect(tree).toMatchSnapshot();
});
