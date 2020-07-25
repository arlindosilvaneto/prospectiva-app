import React from 'react';
import './App.css';
import { AddressListContainer } from './containers/address-list.container';
import { AppStore } from './store/app.store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <AddressListContainer />
      </div>
    </Provider>
  );
}

export default App;
