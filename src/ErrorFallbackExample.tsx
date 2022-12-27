import type { FC } from 'react';

import type { FallbackProps } from 'react-error-boundary';

// This is just an example, replace it by your implementation!

export const ErrorFallbackExample: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}): JSX.Element => (
  <div role='alert'>
    <p>Something went wrong:</p>

    <pre>{error.message}</pre>

    <button
      type='button'
      onClick={resetErrorBoundary}
    >
      Try again
    </button>
  </div>
);
