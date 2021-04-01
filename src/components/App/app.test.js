import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test("'SASS & eXras' to be rendered in footer section.", () => {
  render(<App />);
  const textElement = screen.getByText(/SASS & eXtras/i);
  expect(textElement).toBeInTheDocument();
});
