import { ErrorBoundary } from 'react-error-boundary';

import styles from './App.module.pcss';

import { ErrorFallbackExample } from '@/ErrorFallbackExample';
import { BugglyButton } from '@/examples/BugglyButton';

export const App = (): JSX.Element => (
  // This is just an example, replace ErrorFallbackExample by your implementation!
  <ErrorBoundary FallbackComponent={ErrorFallbackExample}>
    <div className={styles.test}>Test</div>

    {/* ErrorBoundary example */}
    <BugglyButton />
  </ErrorBoundary>
);
