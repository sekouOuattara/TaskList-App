import React from 'react';
import { hsl } from 'color-convert';
import App from './HelloChangingBackgroundApp';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
