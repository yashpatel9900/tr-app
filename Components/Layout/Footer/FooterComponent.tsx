import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faEnvelope, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons'
import FooterStyle from './Footer.module.scss'

export default function FooterComponent() {
    return (
        <footer className={FooterStyle.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className={FooterStyle.footerAboutUs}>
                                <img src="/assets/Color-Logo.png" className={FooterStyle.FooterLogo} />
                                <a href="/PrivacyPolicy" target="_blank">
                                <p className={FooterStyle.footerContent}>
                                Privacy Policy 
                                </p>
                                    </a> 
                                    <a href="/TermsAndCondition" target="_blank">
                                <p className={FooterStyle.footerContent}>
                                Terms & Conditions 
                                </p>
                                </a>
                                
                                    <div className={FooterStyle.socialLogo}>
                                    <a href="https://www.facebook.com/Univia-108489671333150" target="blank">
                                        <img src="/assets/Fb.svg" className={FooterStyle.socialIcon} />
                                    </a>
                                    <a href="#contactus">
                                        <img src="/assets/instagram.svg" className={FooterStyle.socialIcon} />
                                    </a>
                                    <a href="http://linkedin.com/in/univia-agritech" target="blank">
                                        <img src="/assets/in.svg"  className={FooterStyle.socialIcon} />
                                    </a>
                                    <a href="#contactus">
                                        <img src="/assets/Wh.svg" className={FooterStyle.socialIcon} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-4 mb-5">
                               <h2>Incubated & Supported by</h2>
                                <div className="mb-2">
                               <a href="https://cradle-edii.in/incubation/current-incubatees/" target="_blank"> <img src="/assets/CradleLogo.png" className={FooterStyle.FooterLogo} /></a>
                                </div>
                        </div>
                        <div className="col-md-4">
                                    <div className={FooterStyle.footerLinks}>
                                        <h2>Contact Us</h2>
                                        <p><FontAwesomeIcon icon={faPhoneAlt} /> 1800 123 4424</p>
                                        <p><FontAwesomeIcon icon={faEnvelope}/> info@univia.in</p>
                                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Univia Private Limited <br/>
                                        1003, Elite Business Park, 
                                        Nr. Audi showroom, 
                                        opp. Shapath hexa, 
                                        S.G. Highway, Ahmedabad - 380060
                                        </p>
                                    </div> 
                            </div>
                        </div>
                    </div>
            </footer>
    )
}
