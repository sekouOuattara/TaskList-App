import React from 'react';
import ListDemoApp from './ListDemoApp';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ListDemoApp />).toJSON();
  expect(rendered).toBeTruthy();
});
