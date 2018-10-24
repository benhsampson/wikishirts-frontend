import React from 'react';
import ReactDOM from 'react-dom';
import mixpanel from 'mixpanel-browser';
import { injectGlobal } from 'styled-components';

import dotenv from 'dotenv';

import App from './App';

import base from './constants/base';

import registerServiceWorker from './registerServiceWorker';

dotenv.config();

mixpanel.init(mixpanelToken);

injectGlobal`
  ${base};
`;

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

registerServiceWorker();
