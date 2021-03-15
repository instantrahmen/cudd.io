import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles } from '../styles';
import { theme } from '../styles/chakra-theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
