import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import FooterComponent from '../../Components/Layout/Footer/FooterComponent';
import HeaderComponent from '../../Components/Layout/Header/HeaderComponent';
import AboutusStyles from './AboutUs.module.scss';

const AboutUsScene = () => {
    return (
        <>
            <HeaderComponent />
            <div className={AboutusStyles.astPagetitle}>
                <div className={AboutusStyles.astImgOverlay}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className={AboutusStyles.pageTitle}>
                                <h1>About Us</h1>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="breadcrumb justify-content-center">
                                <li><a href="https://trivediravi.com">home</a></li>
                                <li>//</li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
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
                                <li className={AboutusStyles.bulletPoints}><img src="/assets/sun.svg" className={AboutusStyles.sunImg} />  Please refer to the Terms of Use. Email addresses are kept private and never used for mailing lists, unless you formally subscribe to our email newsletter (not currently active), in which case your email address is used solely for this purpose. I do not sell email address lists. Additionally, birth information submitted to us, whether through report orders or natal chart help, is only used for the intended purpose.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <video width="100%" className="mt-5" controls>
                                <source src="https://trivediravi.com/wp-content/uploads/2020/11/about-video.mp4" type="video/mp4" />
                                {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`${AboutusStyles.cta} col-12`}>
                            <h3>Connect to Vastu Astrologer Mr. Trivedi Ravi</h3>
                            <a href="https://trivediravi.com/contact" className="su-button su-button-style-soft"
                                target="_self" title="Contact Now"><span>  <FontAwesomeIcon icon={['fas', 'phone-volume']} />{' '}
                                    Contact Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer wrapper start--> */}
            <FooterComponent />
            {/* <!-- Footer wrapper End--> */}
        </>
    )
}

export default AboutUsScene;