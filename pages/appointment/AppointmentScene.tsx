import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterComponent from "../../Components/Layout/Footer/FooterComponent";
import HeaderComponent from "../../Components/Layout/Header/HeaderComponent";
import AppointmentStyles from "./AppointmentStyles.module.scss";

const AppointmentScene = () => {

  return (
    <>
      <HeaderComponent />
      <div className={AppointmentStyles.astPagetitle}>
        <div className={AppointmentStyles.astImgOverlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={AppointmentStyles.pageTitle}>
                <h1>Appointment</h1>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="breadcrumb justify-content-center">
                <li>
                  <a href="https://trivediravi.com">Home</a>
                </li>
                <li>//</li>
                <li>
                  <a href="#">Appointment</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Vastu Start--> */}
      <div className={AppointmentStyles.astVastuWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={AppointmentStyles.astVastuInfo}>
                <div className={AppointmentStyles.astVastuInfo}>
                  <h2>make your appointment to discuss any problem.</h2>
                  <p className="f-14">Person can approach to our core astrologer by using e-mail address <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c0a9aea6af80b4b2a9b6a5a4a9b2a1b6a9eea3afad">[email&#160;protected]</a> or can use whats App number 9574744469.</p>
                  <p className="f-14">Please refer to the Terms of Use. Email addresses are kept private and never used for mailing lists, unless you formally subscribe to our email newsletter (not currently active), in which case your email address is used solely for this purpose. I do not sell email address lists. Additionally, birth information submitted to us, whether through report orders or natal chart help, is only used for the intended purpose.</p>
                </div>
                <div className={AppointmentStyles.astJournalBoxWrapper}>
                  <h3 className={AppointmentStyles.aptFormHeading}>appointment form</h3>
                  <div role="form" className="wpcf7" id="wpcf7-f174-p169-o2" lang="en-US" dir="ltr">
                    <div className="screen-reader-response" role="alert" aria-live="polite"></div>
                    <form action="/appointment/#wpcf7-f174-p169-o2" method="post" className={AppointmentStyles.aptForm}>
                      <div style={{ display: "none" }}>
                        <input type="hidden" name="_wpcf7" value="174" />
                        <input type="hidden" name="_wpcf7_version" value="5.2" />
                        <input type="hidden" name="_wpcf7_locale" value="en_US" />
                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f174-p169-o2" />
                        <input type="hidden" name="_wpcf7_container_post" value="169" />
                        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                        <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>name</label><br />
                          <span className={AppointmentStyles.formWrap}>
                            <input type="text" name="fname" value="" size={40} className={AppointmentStyles.appointmentFormInput} aria-required="true" aria-invalid="false" placeholder="Name" /></span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>email</label><br />
                          <span className={AppointmentStyles.formWrap}>
                            <input type="email" name="email" value="" size={40} className={AppointmentStyles.appointmentFormInput} aria-required="true" aria-invalid="false" placeholder="Email" /></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>mobile nmber</label><br />
                          <span className={AppointmentStyles.formWrap}>
                            <input type="tel" name="mobile" value="" size={40} className={AppointmentStyles.appointmentFormInput} aria-required="true" aria-invalid="false" placeholder="Mobile Number" /></span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>gender</label><br />
                          <span className={AppointmentStyles.formWrap}>
                            <select name="gender" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>Convenient Time</label><br />
                          <span className={AppointmentStyles.formWrap}><select name="timing" className="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value="Morning">Morning</option><option value="Afternoon">Afternoon</option><option value="Evening">Evening</option></select></span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <label className={AppointmentStyles.appointmentFormLabel}>Reason for appointment</label><br />
                          <span className={AppointmentStyles.formWrap}><select name="reason" className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false"><option value="To cast Birth chart">To cast Birth chart</option><option value="To know career-line">To know career-line</option><option value="To know marriage yog">To know marriage yog</option><option value="To know marriage life">To know marriage life</option><option value="To know about child">To know about child</option><option value="To know recovery of health">To know recovery of health</option><option value="To know about payment delayed">To know about payment delayed</option><option value="To know court case results">To know court case results</option><option value="To know foreign yog">To know foreign yog</option><option value="When will get visa">When will get visa</option><option value="To do business or Job">To do business or Job</option><option value="To get auspicious muhurt">To get auspicious muhurt</option></select></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <input type="submit" value="Make Appointment" className={AppointmentStyles.contactusBtn} />
                        </div>
                      </div>
                      <div className="wpcf7-response-output" role="alert" aria-hidden="true"></div></form></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Vastu End--> */}
      <FooterComponent />
    </>
  );
};

export default AppointmentScene;
