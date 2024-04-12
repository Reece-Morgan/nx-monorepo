import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <Head>
          <title>Reece Morgan | Portfolio | Movie Search</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default CustomApp;
