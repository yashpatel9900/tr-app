import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faEnvelopeOpen,
  faHome,
  faMapMarkerAlt,
  faPhoneAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Chatbot from "./Chatbot";

library.add(
  faPhoneVolume,
  faHome,
  faAt,
  faPhoneAlt,
  faEnvelopeOpen,
  faMapMarkerAlt
);

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Component {...pageProps} />
    <Chatbot />
  </>
);

export default MyApp;
