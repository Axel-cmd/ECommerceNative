import { StatusBar } from 'expo-status-bar';
import { AppRoute } from 'navigations/Navigator';
import { Provider } from 'react-redux';

import { store } from 'redux/store';

export default function App() {
  return (
    <>
      <Provider store={store} >
        <AppRoute />
        <StatusBar style='auto' />
      </Provider>
    </>
  );
}

