import React from "react";
import { AppProps } from 'next/app';
import "../public/css/styles.css";

const HomePage = ({ Component, pageProps }:AppProps) => {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default HomePage;
