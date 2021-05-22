import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import Application from './components/Application';
import reducers from './redux';

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);

function Main() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

ReactDOM.render(
  <Main />,
  document.querySelector('#root')
);