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
          <br/>
            <h2 className={AboutusStyles.title}>Daily Routines </h2>
            <br/>
            <h4 className="text-center">
              Trivedi Ravi had studied vedic astrology, KP astrology, Navmansha
              method, arudh pada, Sarvatobhadra chakra, Muhurat shastr,
              Numerology, Lo shu grid, Vastu shastr.
            </h4>
            <br/>
            <br/>

            <div className="col-lg col-md-4 mt-5">
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
            <div className="col-lg col-md-8 mt-5">
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
            <div className="col-lg col-md-8 mt-5">
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
                <br/>
                <div style={{width : "90%" , margin:"auto"}}>
                  <small >Here is today's expert tips from our astroguru Mr. Trivedi Ravi. For more tips please contact on 9574744469</small>
                  <br/>
                  <br/>
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
      <FooterComponent />
      {/* <!-- Footer wrapper End--> */}
    </>
  );
};

export default HomeScene;
