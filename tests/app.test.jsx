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

it('does not accept caller-supplied approved content as a release decision', () => {
  render(<App claimView={{
    status: 'approved',
    text: 'Synthetic approved copy for a test only.',
    sourceUrl: 'https://example.org/test',
  }} />);
  expect(screen.getByRole('heading', {name: /Medication safety content under review/i})).toBeTruthy();
  expect(screen.queryByText('Synthetic approved copy for a test only.')).toBeNull();
  expect(screen.queryByRole('link', {name: /View source label/i})).toBeNull();
});
