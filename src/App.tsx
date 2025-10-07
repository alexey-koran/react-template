import type { FC } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallbackExample } from '@/ErrorFallbackExample';

import styles from './App.module.pcss';

export const App: FC = () => (
  // This is just an example, replace ErrorFallbackExample by your implementation!
  <ErrorBoundary FallbackComponent={ErrorFallbackExample}>
    <div className={styles.test}>Test PCSS Modules</div>
    <div className='text-red-300'>Test Tailwind utility classes</div>
  </ErrorBoundary>
);
