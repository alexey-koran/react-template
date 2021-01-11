import React, { Fragment } from 'react';

import LazyImagesExample from '@/components/LazyImagesExample';
import TableExample from '@/components/TableExample';

const App = (): JSX.Element => (
  <Fragment>
    <TableExample />
    <LazyImagesExample />
  </Fragment>
);

export default App;
