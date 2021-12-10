import '@/assets/stylesheets/index.scss';

import { CookiesProvider } from 'react-cookie';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from 'react';

import { App } from '@/App';

render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('app'),
);
