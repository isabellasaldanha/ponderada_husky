import { render, screen } from '@testing-library/react';
import TimezoneClock from './TimezoneClock';
import '@testing-library/jest-dom';
import React from 'react';

test('renderiza o Timezone com o nome da cidade', () => {
  render(<TimezoneClock timezone="America/New_York" city="New York" />);
  const linkElement = screen.getByText(/New York/i);
  expect(linkElement).toBeInTheDocument();
});
