// @vitest-environment jsdom
import React from 'react';
import { afterEach, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { toHaveNoViolations } from 'vitest-axe/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { App } from '../src/App.jsx';

expect.extend({ toHaveNoViolations });
afterEach(cleanup);

it('has no axe violations on the review-pending page', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it('keeps the page usable by keyboard: headings and landmarks are present, no positive tabindex', () => {
  const { container } = render(<App />);
  expect(screen.getByRole('main')).toBeTruthy();
  expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  expect(
    screen.getByRole('heading', { name: /Medication safety content under review/i }),
  ).toBeTruthy();
  expect(screen.getByRole('heading', { name: /If you feel unsafe/i })).toBeTruthy();
  const positiveTabindex = container.querySelectorAll('[tabindex]');
  for (const el of positiveTabindex) {
    expect(Number(el.getAttribute('tabindex'))).toBeLessThan(1);
  }
});

it('keeps the emergency placeholder visible and clearly marked as pending review', () => {
  render(<App />);
  expect(screen.getByText(/Call emergency services/i)).toBeTruthy();
  expect(screen.getByText(/pending clinical review/i)).toBeTruthy();
  // The placeholder text is asserted verbatim above: it must stay generic
  // until a clinician approves final copy (J3S-34).
});
