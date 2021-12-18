import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderComponent from "../../Components/Layout/Header/HeaderComponent";
import ContactusStyles from "./ContactUs.module.scss";

const AboutUsScene = () => {
  return (
    <>
      <HeaderComponent />
      <div className={ContactusStyles.astPagetitle}>
        <div className={ContactusStyles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={ContactusStyles.pageTitle}>
                <h1>Contact Us</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Content Us Start--> */}
      <div className={ContactusStyles.astContactWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-0">
              <div className={ContactusStyles.astHeading}>
                <h2 className="mt-4">
                  get in <span>touch</span>
                </h2>
                <p className={ContactusStyles.astSubHeading}>
                  Please don't hasitate to contact with Mr. Trivedi Ravi.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={ContactusStyles.astContactInfo}>
                <span className={ContactusStyles.ConatctusIcon}>
                  <FontAwesomeIcon
                    icon={["fas", "phone-alt"]}
                    className={ContactusStyles.phoneIcon}
                  />
                </span>
                <h4 className={ContactusStyles.iconText}>phone</h4>
                <p className="f-14">+91 9574744469</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={ContactusStyles.astContactInfo}>
                <span className={ContactusStyles.ConatctusIcon}>
                  <FontAwesomeIcon
                    icon={["fas", "envelope-open"]}
                    className={ContactusStyles.phoneIcon}
                  />
                </span>
                <h4 className={ContactusStyles.iconText}>email</h4>
                <p className="f-14">
                  <a href="/cdn-cgi/l/email-protection#b8d1d6ded7f8cccad1cedddcd1cad9ced196dbd7d5">
                    <span
                      className="__cf_email__"
                      data-cfemail="bdd4d3dbd2fdc9cfd4cbd8d9d4cfdccbd493ded2d0"
                    >
                      info@trivediravi.com
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={ContactusStyles.astContactInfo}>
                <span className={ContactusStyles.ConatctusIcon}>
                  <FontAwesomeIcon
                    icon={["fas", "map-marker-alt"]}
                    className={ContactusStyles.phoneIcon}
                  />
                </span>
                <h4 className={ContactusStyles.iconText}>address</h4>
                <p className="f-14">Ahmedabad - Gujarat - India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ContactusStyles.astMapnformWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-12">
              <div className={ContactusStyles.astHeading}>
                <h3>
                  find & message <span>here</span>
                </h3>
                <p className={ContactusStyles.astSubHeading}>
                  Mr. Trivedi Ravi - Expert Astrologer
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 ast_bottompadder30">
              <img
                src="/assets/Contact-us.svg"
                style={{ maxWidth: "100%" }}
                alt="contact"
                title="contact"
                className={ContactusStyles.contactImg}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 ast_bottompadder30">
              <div className={ContactusStyles.astContactForm}>
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f20-o2"
                  lang="en-US"
                  dir="ltr"
                >
                  <div
                    className="screen-reader-response"
                    role="alert"
                    aria-live="polite"
                  ></div>
                  <form
                    action="/contact-us/#wpcf7-f20-o2"
                    method="post"
                    className="wpcf7-form init"
                  >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" value="20" />
                      <input type="hidden" name="_wpcf7_version" value="5.2" />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f20-o2"
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
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label className={ContactusStyles.contactusFormLabel}>
                          first name
                        </label>
                        <br />
                        <span className={ContactusStyles.formWrap}>
                          <input
                            type="text"
                            name="fname"
                            value=""
                            size={40}
                            className={ContactusStyles.contactFormInput}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label className={ContactusStyles.contactusFormLabel}>
                          last name
                        </label>
                        <br />
                        <span className={ContactusStyles.formWrap}>
                          <input
                            type="text"
                            name="lname"
                            value=""
                            size={40}
                            className={ContactusStyles.contactFormInput}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label className={ContactusStyles.contactusFormLabel}>
                          email
                        </label>
                        <br />
                        <span className={ContactusStyles.formWrap}>
                          <input
                            type="email"
                            name="email"
                            value=""
                            size={40}
                            className={ContactusStyles.contactFormInput}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label className={ContactusStyles.contactusFormLabel}>
                          phone number
                        </label>
                        <br />
                        <span className={ContactusStyles.formWrap}>
                          <input
                            type="tel"
                            name="phone"
                            value=""
                            size={40}
                            className={ContactusStyles.contactFormInput}
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className={ContactusStyles.contactusFormLabel}>
                          message
                        </label>
                        <br />
                        <span className={ContactusStyles.formWrap}>
                          <textarea
                            name="message"
                            cols={40}
                            rows={10}
                            className={ContactusStyles.contactFormTextarea}
                            aria-required="true"
                            aria-invalid="false"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                    <div className="response"></div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="submit"
                          value="Send"
                          className={ContactusStyles.contactusBtn}
                        />
                      </div>
                    </div>
                    <div
                      className="wpcf7-response-output"
                      role="alert"
                      aria-hidden="true"
                    ></div>
                  </form>
                </div>{" "}
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ast_bottompadder30 pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117473.50578538315!2d72.44777821408822!3d23.058736372098334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d6fc82ca705%3A0xf373cec79a0f4f3a!2sTrivedi%20Ravi!5e0!3m2!1sen!2sin!4v1585829979193!5m2!1sen!2sin"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Content Us End--> */}

      {/* <!-- Footer wrapper start--> */}
      <div className={ContactusStyles.astFooterWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-0 mx-auto">
              <div className={ContactusStyles.astFooterInfo}>
                <img
                  src="https://trivediravi.com/wp-content/themes/astro/images/header/logo.png"
                  alt="Logo"
                  title="Logo"
                  className={ContactusStyles.footerImg}
                />
                <p className={ContactusStyles.astFooterPara}>
                  Trivedi Raviji is holding expertise in various astrology
                  branches like Vedic astrology, KP astrology, Vastu Shastra,
                  Numerology, etc.In past, he gave mile-stone prediction in
                  advance as an example Trump win the election, Late Jaylalitha
                  ji’s death, P V sindhu couldn’t got Gold medal, Gold price
                  touch at 41000 Rs, Box office success for many movies etc.
                </p>
                <ul className={ContactusStyles.asFooterList}>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://www.facebook.com/trivediraviastroguru/"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://join.skype.com/invite/YKZyus2k7T0l"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://twitter.com/TrivediRaviji"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://www.youtube.com/user/ravi4197"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://www.instagram.com/trivediraviastrology/"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className={ContactusStyles.asFooterIconList}>
                    <a
                      href="https://www.linkedin.com/in/trivedi-ravi-669b371a5/"
                      target="_blank"
                      rel="noreferrer"
                      className={ContactusStyles.asFooterIconLink}
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
              <div className={ContactusStyles.widget}>
                <h4 className={ContactusStyles.widgetTitle}>our newsletter</h4>
                <div className={ContactusStyles.astNewsLetter}>
                  <p className={ContactusStyles.widgetPara}>
                    Please get updated with latest tips provided by Mr. Trivedi
                    Ravi.
                  </p>
                  <div className={ContactusStyles.astNewsletterBox}>
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
                              className={`${ContactusStyles.input} mb-4`}
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Email"
                            />
                          </span>
                          <input
                            type="submit"
                            value="Send"
                            className={ContactusStyles.input}
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
              <div className={ContactusStyles.widget}>
                <h4 className={ContactusStyles.widgetTitle}>our services</h4>
                <div className={ContactusStyles.serviceLinks}>
                  <ul className={ContactusStyles.serviceList}>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/horoscope/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        horoscopes
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/traditional-muhurat/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Traditional Muhurat
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/modern-muhurat/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Modern Muhurat
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/numerology-report/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Numerology
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vastu-shastra/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Vastu Consultation
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/vedic-astrology/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Vedic Astrology
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className={ContactusStyles.widget}>
                <h4 className={ContactusStyles.widgetTitle}>quick links</h4>
                <div className={ContactusStyles.serviceLinks}>
                  <ul className={ContactusStyles.serviceList}>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/about/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        about
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/blog/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        blog
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/services/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        services
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/appointment/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Appointment
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/contact/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        contact
                      </a>
                    </li>
                    <li className={ContactusStyles.serviceNavLinks}>
                      <a
                        href="https://trivediravi.com/privacy-policy/"
                        className={ContactusStyles.serviceActionLink}
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className={ContactusStyles.widget}>
                <h4 className={ContactusStyles.widgetTitle}>get in touch</h4>
                <div className={ContactusStyles.serviceLinks}>
                  <ul className={ContactusStyles.serviceList}>
                    <li className={`${ContactusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "home"]}
                        className={ContactusStyles.Homeicon}
                      />{" "}
                      <p className={ContactusStyles.getInTouchText}>
                        Ahmedabad - Gujarat - India
                      </p>
                    </li>
                    <li className={`${ContactusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "at"]}
                        className={ContactusStyles.Homeicon}
                      />{" "}
                      <a
                        href="/cdn-cgi/l/email-protection#c5acaba3aa85b1b7acb3a0a1acb7a4b3aceba6aaa8"
                        className={ContactusStyles.getInTouchText}
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="c4adaaa2ab84b0b6adb2a1a0adb6a5b2adeaa7aba9"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li className={`${ContactusStyles.serviceNavLinks} mb-4`}>
                      <FontAwesomeIcon
                        icon={["fas", "phone-alt"]}
                        className={ContactusStyles.Homeicon}
                      />{" "}
                      <a
                        href="tel:+91957474469"
                        className={ContactusStyles.getInTouchText}
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

export default AboutUsScene;
