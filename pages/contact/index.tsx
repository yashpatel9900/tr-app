import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterComponent from "../../Components/Layout/Footer/FooterComponent";
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

      <FooterComponent />
    </>
  );
};

export default AboutUsScene;
