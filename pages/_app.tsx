import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faHome, faPhoneAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Home from "../src/component/Containers/Home/HomeContainer.tsx"
import React, { Component } from "react";

library.add(
faPhoneVolume,
faHome,
faAt,
faPhoneAlt
);


const MyApp = ({ Component, pageProps}) => (
 
  <Home {...pageProps} />
)


export default MyApp;