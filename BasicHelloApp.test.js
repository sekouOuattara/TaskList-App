import React from 'react';
import BasicHelloApp from './BasicHelloApp';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders without crashing', () => {
  const rendered = renderer.create(<BasicHelloApp />).toJSON();
  expect(rendered).toBeTruthy();
});
