import React from 'react';
import TextStylesApp from './TextStylesApp';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<TextStylesApp />).toJSON();
  expect(rendered).toBeTruthy();
});
