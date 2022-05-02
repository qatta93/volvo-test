import "../public/css/styles.css";
import React from "react";

function HomePage({ Component, pageProps }:any) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default HomePage;

