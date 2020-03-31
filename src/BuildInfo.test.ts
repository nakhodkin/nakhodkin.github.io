import { render } from '@testing-library/svelte'
import '@testing-library/jest-dom/extend-expect'

import BuildInfo from './BuildInfo.svelte';

test('shows proper heading when rendered', () => {
  const { getByText } = render(BuildInfo, { run: 1, date: '31/03/2020' });

  expect(getByText('Build info')).toBeInTheDocument()
});

test('shows proper run number when rendered', () => {
  const { container } = render(BuildInfo, { run: 1, date: '31/03/2020' });

  expect(container.querySelector('p:first-of-type')).toHaveTextContent('1');
});

test('shows proper run date when rendered', () => {
  const { container } = render(BuildInfo, { run: 1, date: '31/03/2020' });

  expect(container.querySelector('p:last-of-type')).toHaveTextContent('31/03/2020');
});
