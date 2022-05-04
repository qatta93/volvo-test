import React from "react";
import { AppProps } from 'next/app';
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from 'vcc-ui';

const HomePage = ({ Component, pageProps }:AppProps) => {
  return (
    <StyleProvider>
      <ThemePicker variant="dark">
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
};

export default HomePage;
