// @vitest-environment jsdom
import React from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from '../src/components/ErrorBoundary.jsx';

afterEach(cleanup);

function Thrower() {
  throw new Error('synthetic render failure for test only');
}

it('renders a fallback instead of a blank page when a child throws', () => {
  // Silence the expected React error log for this test only.
  const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
  render(
    <ErrorBoundary>
      <Thrower />
    </ErrorBoundary>,
  );
  expect(screen.getByRole('heading', { name: /Something went wrong/i })).toBeTruthy();
  expect(screen.getByRole('button', { name: /Try again/i })).toBeTruthy();
  expect(document.body.textContent).not.toBe('');
  spy.mockRestore();
});

it('recovers when the user retries after a transient failure', () => {
  const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
  let shouldThrow = true;
  function Flaky() {
    if (shouldThrow) {
      throw new Error('synthetic transient failure for test only');
    }
    return <p>Recovered content</p>;
  }
  render(
    <ErrorBoundary>
      <Flaky />
    </ErrorBoundary>,
  );
  expect(screen.getByRole('button', { name: /Try again/i })).toBeTruthy();
  shouldThrow = false;
  fireEvent.click(screen.getByRole('button', { name: /Try again/i }));
  expect(screen.getByText('Recovered content')).toBeTruthy();
  spy.mockRestore();
});

it('passes children through unchanged when nothing throws', () => {
  render(
    <ErrorBoundary>
      <p>Healthy content</p>
    </ErrorBoundary>,
  );
  expect(screen.getByText('Healthy content')).toBeTruthy();
});
