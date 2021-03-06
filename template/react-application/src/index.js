import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';

const rootEl = document.getElementById('root');

ReactDOM.render((
  <AppContainer>
    <App />
  </AppContainer>),
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    ReactDOM.render((
      <AppContainer>
         <NextApp />
      </AppContainer>),
      rootEl
    );
  });
}
