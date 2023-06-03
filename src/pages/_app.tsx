import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/color-styles.css';
import '../styles/normalize.css';
import RootLayout from '@/pages/layout';
import '@fontsource/poppins';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </RootLayout>
);
}