import { type FC, useEffect, useState } from 'react';

export const BugglyButton: FC = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter === 5) {
      throw new Error('ErrorBoundary example');
    }
  }, [counter]);

  return (
    <button
      type='button'
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      {counter}
    </button>
  );
};
