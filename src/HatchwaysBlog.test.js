import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils'; // Import act for rendering inside tests
import HatchwaysBlog from './HatchwaysBlog';
import { useEffect } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));
test('HatchwaysBlog renders correctly', () => {
  // Create a DOM container element
  const container = document.createElement('div');
  document.body.appendChild(container); // Append it to the document body

  // Use act to render the component inside the test
  act(() => {
    render(<HatchwaysBlog />, container);
  });

  // Your test assertions here
});
