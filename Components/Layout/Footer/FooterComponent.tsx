import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FooterStyle from './Footer.module.scss'

export default function FooterComponent() {
    return (
        <footer>
            {/* <!-- Footer wrapper start--> */}
            <div className={FooterStyle.astFooterWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-1 col-xs-offset-0 mx-auto">
                            <div className={FooterStyle.astFooterInfo}>
                                <img
                                    src="https://trivediravi.com/wp-content/themes/astro/images/header/logo.png"
                                    alt="Logo"
                                    title="Logo"
                                    className={FooterStyle.footerImg}
                                />
                                <p className={FooterStyle.astFooterPara}>
                                    Trivedi Raviji is holding expertise in various astrology
                                    branches like Vedic astrology, KP astrology, Vastu Shastra,
                                    Numerology, etc.In past, he gave mile-stone prediction in
                                    advance as an example Trump win the election, Late Jaylalitha
                                    ji’s death, P V sindhu couldn’t got Gold medal, Gold price
                                    touch at 41000 Rs, Box office success for many movies etc.
                                </p>
                                <ul className={FooterStyle.asFooterList}>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://www.facebook.com/trivediraviastroguru/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/facebook-logo.png" className="w-14" />
                                        </a>
                                    </li>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://join.skype.com/invite/YKZyus2k7T0l"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/skype.png" className="w-16" />
                                        </a>
                                    </li>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://twitter.com/TrivediRaviji"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/twitter.png" className="w-16" />
                                        </a>
                                    </li>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://www.youtube.com/user/ravi4197"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/youtube.png" className="w-14" />
                                        </a>
                                    </li>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://www.instagram.com/trivediraviastrology/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/instagram.png" className="w-14" />
                                        </a>
                                    </li>
                                    <li className={FooterStyle.asFooterIconList}>
                                        <a
                                            href="https://www.linkedin.com/in/trivedi-ravi-669b371a5/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={FooterStyle.asFooterIconLink}
                                        >
                                            <img src="/assets/linkedin.png" className="w-16" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className={FooterStyle.widget}>
                                <h4 className={FooterStyle.widgetTitle}>our newsletter</h4>
                                <div className={FooterStyle.astNewsLetter}>
                                    <p className={FooterStyle.widgetPara}>
                                        Please get updated with latest tips provided by Mr. Trivedi
                                        Ravi.
                                    </p>
                                    <div className={FooterStyle.astNewsletterBox}>
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
                                                            className={`${FooterStyle.input} mb-4`}
                                                            aria-required="true"
                                                            aria-invalid="false"
                                                            placeholder="Enter Email"
                                                        />
                                                    </span>
                                                    <input
                                                        type="submit"
                                                        value="Send"
                                                        className={FooterStyle.input}
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
                            <div className={FooterStyle.widget}>
                                <h4 className={FooterStyle.widgetTitle}>our services</h4>
                                <div className={FooterStyle.serviceLinks}>
                                    <ul className={FooterStyle.serviceList}>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/horoscope/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                horoscopes
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/traditional-muhurat/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Traditional Muhurat
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/modern-muhurat/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Modern Muhurat
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/numerology-report/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Numerology
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/vastu-shastra/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Vastu Consultation
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/vedic-astrology/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Vedic Astrology
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className={FooterStyle.widget}>
                                <h4 className={FooterStyle.widgetTitle}>quick links</h4>
                                <div className={FooterStyle.serviceLinks}>
                                    <ul className={FooterStyle.serviceList}>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/about/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                about
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/blog/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                blog
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/services/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                services
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/appointment/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Appointment
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/contact/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                contact
                                            </a>
                                        </li>
                                        <li className={FooterStyle.serviceNavLinks}>
                                            <a
                                                href="https://trivediravi.com/privacy-policy/"
                                                className={FooterStyle.serviceActionLink}
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className={FooterStyle.widget}>
                                <h4 className={FooterStyle.widgetTitle}>get in touch</h4>
                                <div className={FooterStyle.serviceLinks}>
                                    <ul className={FooterStyle.serviceList}>
                                        <li className={`${FooterStyle.serviceNavLinks} mb-4`}>
                                            <FontAwesomeIcon
                                                icon={["fas", "home"]}
                                                className={FooterStyle.Homeicon}
                                            />{" "}
                                            <p className={FooterStyle.getInTouchText}>
                                                Ahmedabad - Gujarat - India
                                            </p>
                                        </li>
                                        <li className={`${FooterStyle.serviceNavLinks} mb-4`}>
                                            <FontAwesomeIcon
                                                icon={["fas", "at"]}
                                                className={FooterStyle.Homeicon}
                                            />{" "}
                                            <a
                                                href="/cdn-cgi/l/email-protection#c5acaba3aa85b1b7acb3a0a1acb7a4b3aceba6aaa8"
                                                className={FooterStyle.getInTouchText}
                                            >
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="c4adaaa2ab84b0b6adb2a1a0adb6a5b2adeaa7aba9"
                                                >
                                                    [email&#160;protected]
                                                </span>
                                            </a>
                                        </li>
                                        <li className={`${FooterStyle.serviceNavLinks} mb-4`}>
                                            <FontAwesomeIcon
                                                icon={["fas", "phone-alt"]}
                                                className={FooterStyle.Homeicon}
                                            />{" "}
                                            <a
                                                href="tel:+91957474469"
                                                className={FooterStyle.getInTouchText}
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
        </footer>
    )
}
