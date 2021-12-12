import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderComponent from "../Components/Layout/Header/HeaderComponent";
import FooterComponent from "../Components/Layout/Footer/FooterComponent";
import AboutusStyles from "./Home.module.scss";
import { Carousel } from "react-bootstrap";
import HomeHeaderCarousel from "./HomeHeaderCarousel";
import HomeBottomCarousel from "./HomeBottomCarousel";

const HomeScene = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <>
      <HeaderComponent />
      <HomeHeaderCarousel />

      <div className={AboutusStyles.astVastuWrapper}>
        <div className="container">
          <div className="row">
            <h2 className={AboutusStyles.title}>Daily Routines </h2>
            <h4 className="text-center">
              Trivedi Ravi had studied vedic astrology, KP astrology, Navmansha
              method, arudh pada, Sarvatobhadra chakra, Muhurat shastr,
              Numerology, Lo shu grid, Vastu shastr.
            </h4>
            <div className="col-lg col-md-4 ">
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingInlineStart: 0,
                  width: "20rem",
                  padding: "1rem",
                }}
              >
                <div className="bg-warning bg-lighten-lg text-white p-2 ml-2">
                  Worried? Try Numerograph
                </div>
                <div>
                  <input
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                    }}
                    type="text"
                    placeholder="Name*"
                    required
                  />{" "}
                  <br />
                  <input
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                    }}
                    type="datetime-local"
                    placeholder="Date of Birth"
                    required
                  />{" "}
                  <br />
                  <select
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                    }}
                  >
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>{" "}
                  <br />
                  <input
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                    }}
                    placeholder="Phone Number"
                  />{" "}
                  <br />
                  <input
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                    }}
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="button"
                    className="bg-warning bg-lighten-lg text-white p-1 ml-2"
                    style={{
                      width: "13rem",
                      marginTop: "1rem",
                      height: "2.2rem",
                      border: "0px solid white",
                    }}
                    placeholder="Email"
                    value="Get Now"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg col-md-8 ">
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingInlineStart: 0,
                  width: "20rem",
                  padding: "1rem",
                }}
              >
                <div className="bg-warning bg-lighten-lg text-white p-2 ml-2">
                  Reports
                </div>
                <div>
                  <br/>
                <div className="list-group-item list-group-item-action d-flex" style={{ justifyContent : "center"}}>
                  <img
                    alt="vastu report"
                    width="40"
                    height="40"
                    className="rounded-circle flex-shrink-0 mt-2"
                    src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_1.png"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    <span className="mb-0" style={{ fontSize: "1rem" , float:"left" }}>Vastu Report</span>
                    <div className="mb-0 opacity-75" style={{ fontSize: "0.7rem", float:"left"  }}>
                      Get Your Home Vastu reports,Office vastu reports at
                      minimum price
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="list-group-item list-group-item-action d-flex" style={{ justifyContent : "center"}}>
                  <img
                    alt="vastu report"
                    width="40"
                    height="40"
                    className="rounded-circle flex-shrink-0 mt-2"
                    src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_2.png"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    <span className="mb-0" style={{ fontSize: "1rem" , float:"left" }}>Vastu Report</span>
                    <div className="mb-0 opacity-75" style={{ fontSize: "0.7rem", float:"left"  }}>
                      Get Your Home Vastu reports,Office vastu reports at
                      minimum price
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="list-group-item list-group-item-action d-flex" style={{ justifyContent : "center"}}>
                  <img
                    alt="vastu report"
                    width="40"
                    height="40"
                    className="rounded-circle flex-shrink-0 mt-2"
                    src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_3.png"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    <span className="mb-0" style={{ fontSize: "1rem" , float:"left" }}>Vastu Report</span>
                    <div className="mb-0 opacity-75" style={{ fontSize: "0.7rem", float:"left"  }}>
                      Get Your Home Vastu reports,Office vastu reports at
                      minimum price
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="list-group-item list-group-item-action d-flex" style={{ justifyContent : "center"}}>
                  <img
                    alt="vastu report"
                    width="40"
                    height="40"
                    className="rounded-circle flex-shrink-0 mt-2"
                    src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_2.png"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    <span className="mb-0" style={{ fontSize: "1rem" , float:"left" }}>Vastu Report</span>
                    <div className="mb-0 opacity-75" style={{ fontSize: "0.7rem", float:"left"  }}>
                      Get Your Home Vastu reports,Office vastu reports at
                      minimum price
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="list-group-item list-group-item-action d-flex" style={{ justifyContent : "center"}}>
                  <img
                    alt="vastu report"
                    width="40"
                    height="40"
                    className="rounded-circle flex-shrink-0 mt-2"
                    src="https://trivediravi.com/wp-content/themes/astro/images/content/vad_1.png"
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                    <span className="mb-0" style={{ fontSize: "1rem" , float:"left" }}>Vastu Report</span>
                    <div className="mb-0 opacity-75" style={{ fontSize: "0.7rem", float:"left"  }}>
                      Get Your Home Vastu reports,Office vastu reports at
                      minimum price
                    </div>
                    </div>
                  </div>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-lg col-md-8 ">
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingInlineStart: 0,
                  width: "20rem",
                  padding: "1rem",
                }}
              >
                <div className="bg-warning bg-lighten-lg text-white p-2 ml-2">
                  Today's Expert Tips
                </div>
                <div>
                  <span>Here is today's expert tips from our astroguru Mr. Trivedi Ravi. For more tips please contact on 9574744469</span>
                <img alt="loading" width="240" src="https://trivediravi.com/wp-content/themes/astro/images/experttips/11.jpg" />
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <HomeBottomCarousel />
          <div className={AboutusStyles.astVastuWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className={AboutusStyles.title}>About Trivedi Ravi</h2>
                            <ul className={AboutusStyles.List}>
                                <li className={AboutusStyles.bulletPoints}>
                                    <img src="/assets/sun.svg" className={AboutusStyles.sunImg} /> Trivedi Raviji is holding expertise in various astrology branches like Vedic astrology, KP astrology, Vastu Shastr, Numerology, etc. </li>
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  In past, he gave mile-stone prediction in advance as an example Trump win the election, Late Jaylalitha ji’s death, P V sindhu couldn’t got Gold medal, Gold price touch at 41000 Rs, Box office success for many movies, etc .  </li>
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  Further, he is expert to give accurate prediction as well as effective remedy. Also, he has habit to set remedy with combination of Vedic astrology, Vastu shastra and numerology. So the clients are getting success smoothly. </li>
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  The goal is to maintain this website for anyone who believe in astrology and provide him/her life path through astrological solutions. Also, Astrologer who are participating in Astro-research can post the articles via this website.</li>
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  Person can approach to our core astrologer by using e-mail address <a href="mailto:info@trivediravi.com"></a> or can use whatsApp number 9574744469.</li>
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} /> Also, Astrologer who are participating in Astro-research can post the articles via this website. Person can approach to our core astrologer by using e-mail address info@trivediravi.com or can use whatsApp number 9574744469.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="https://trivediravi.com/wp-content/uploads/2020/11/home-about.png"/>
                        </div>
                    </div>
                </div>
            </div>
          <div className="row">
            <div className={`${AboutusStyles.cta} col-12`}>
              <h3>Connect to Vastu Astrologer Mr. Trivedi Ravi</h3>
              <a
                href="https://trivediravi.com/contact"
                className="su-button su-button-style-soft"
                target="_self"
                title="Contact Now"
              >
                <span>
                  {" "}
                  <FontAwesomeIcon icon={["fas", "phone-volume"]} /> Contact Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer wrapper start--> */}
      <div className={AboutusStyles.astFooterWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-0 mx-auto">
              <div className={AboutusStyles.astFooterInfo}>
                <img
                  src="https://trivediravi.com/wp-content/themes/astro/images/header/logo.png"
                  alt="Logo"
                  title="Logo"
                  className={AboutusStyles.footerImg}
                />
                <p className={AboutusStyles.astFooterPara}>
                  Trivedi Raviji is holding expertise in various astrology
                  branches like Vedic astrology, KP astrology, Vastu Shastra,
                  Numerology, etc.In past, he gave mile-stone prediction in
                  advance as an example Trump win the election, Late Jaylalitha
                  ji’s death, P V sindhu couldn’t got Gold medal, Gold price
                  touch at 41000 Rs, Box office success for many movies etc.
                </p>
                <ul className={AboutusStyles.asFooterList}>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.facebook.com/trivediraviastroguru/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://join.skype.com/invite/YKZyus2k7T0l"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://twitter.com/TrivediRaviji"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.youtube.com/user/ravi4197"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.instagram.com/trivediraviastrology/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={AboutusStyles.asFooterIconList}>
                    <a
                      href="https://www.linkedin.com/in/trivedi-ravi-669b371a5/"
                      target="_blank"
                      rel="noreferrer"
                      className={AboutusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>our newsletter</h4>
                <div className={AboutusStyles.astNewsLetter}>
                  <p className={AboutusStyles.widgetPara}>
                    Please get updated with latest tips provided by Mr. Trivedi
                    Ravi.
                  </p>
                  <div className={AboutusStyles.astNewsletterBox}>
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f88-o2"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div
                        className="screen-reader-response"
                        role="alert"
                        aria-live="polite"
                      ></div>
                      <form
                        action="/about-us/#wpcf7-f88-o2"
                        method="post"
                        className="wpcf7-form init"
                      >
                        <div style={{ display: "none" }}>
                          <input type="hidden" name="_wpcf7" value="88" />
                          <input
                            type="hidden"
                            name="_wpcf7_version"
                            value="5.2"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_locale"
                            value="en_US"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_unit_tag"
                            value="wpcf7-f88-o2"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_container_post"
                            value="0"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_posted_data_hash"
                            value=""
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            value=""
                          />
                        </div>
                        <p>
                          <span className="wpcf7-form-control-wrap email">
                            <input
                              type="email"
                              name="email"
                              value=""
                              className={`${AboutusStyles.input} mb-4`}
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Email"
                            />
                          </span>
                          <input
                            type="submit"
                            value="Send"
                            className={AboutusStyles.input}
                          />
                        </p>
                        <div
                          className="wpcf7-response-output"
                          role="alert"
                          aria-hidden="true"
                        ></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>our services</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/horoscope/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        horoscopes
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/traditional-muhurat/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Traditional Muhurat
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/modern-muhurat/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Modern Muhurat
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/numerology-report/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Numerology
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vastu-shastra/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Vastu Consultation
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vedic-astrology/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Vedic Astrology
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>quick links</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/about/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        about
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/blog/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        blog
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/services/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        services
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/appointment/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Appointment
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/contact/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        contact
                      </a>
                    </li>
                    <li className={AboutusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/privacy-policy/"
                        className={AboutusStyles.serviceActionLink}
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={AboutusStyles.widget}>
                <h4 className={AboutusStyles.widgetTitle}>get in touch</h4>
                <div className={AboutusStyles.serviceLinks}>
                  <ul className={AboutusStyles.serviceList}>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "home"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <p className={AboutusStyles.getInTouchText}>
                        Ahmedabad - Gujarat - India
                      </p>
                    </li>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "at"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <a
                        href="/cdn-cgi/l/email-protection#c5acaba3aa85b1b7acb3a0a1acb7a4b3aceba6aaa8"
                        className={AboutusStyles.getInTouchText}
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="c4adaaa2ab84b0b6adb2a1a0adb6a5b2adeaa7aba9"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li className={`${AboutusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "phone-alt"]}
                        className={AboutusStyles.Homeicon}
                      />{" "}
                      <a
                        href="tel:+91957474469"
                        className={AboutusStyles.getInTouchText}
                      >
                        +91 9574744469
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="ast_copyright_wrapper">
                <p>
                  &copy; Copyright 2020, All Rights Reserved,{" "}
                  <a href="https://trivediravi.com">Trivedi Ravi</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};

export default HomeScene;
