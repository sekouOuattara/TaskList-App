import React from 'react';
import BasicInteractionApp from './BasicInteractionApp';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders without crashing', () => {
  const rendered = renderer.create(<BasicInteractionApp />).toJSON();
  expect(rendered).toBeTruthy();
});
