import React from 'react';
import App from './HelloWithImageApp';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
