// @vitest-environment jsdom
import React from 'react';
import {afterEach, expect, it} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import {App} from '../src/App.jsx';

afterEach(cleanup);

it('the actual app hides the unreviewed medication claim by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', {name: /Medication safety content under review/i})).toBeTruthy();
  expect(screen.queryByRole('link', {name: /View source label/i})).toBeNull();
  expect(screen.queryByText(/Synthetic approved copy/i)).toBeNull();
});

it('a synthetic reviewed claim can be displayed with its source link', () => {
  render(<App claimView={{status: 'approved', text: 'Synthetic approved copy for a test only.', sourceUrl: 'https://example.org/test'}} />);
  expect(screen.getByText('Synthetic approved copy for a test only.')).toBeTruthy();
  expect(screen.getByRole('link', {name: /View source label/i}).getAttribute('href')).toBe('https://example.org/test');
});
