import { string } from 'prop-types';
import React from 'react';
import styles from './contact.module.scss';

const contactPropTypes = {
    email: string,
    phone: string,
    address: string,
};

export default ContactTemplate;

ContactTemplate.propTypes = contactPropTypes;
ContactTemplate.defaultProps = {
    email: '',
    phone: '',
    address: '',
};

function ContactTemplate({ email, phone, address }) {
    const formattedAddress = address.split(',');

    return (
        <>
            <section className={styles.contactStyles}>
                <div className={`${styles.flexSection} ${styles.header}`}>
                    <h1>We would love to talk business with you.</h1>
                </div>
                <div className={styles.flexSection}>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexGrow}>
                            <p className={styles.bold}>Headforwards</p>
                            <ul>
                                {formattedAddress.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.flexGrow}>
                            <p>Telephone.</p>
                            <p className={styles.bold}>{phone}</p>
                            <p>Email.</p>
                            <p className={styles.bold}>{email}</p>
                        </div>
                    </div>
                    <div>
                            <h1>Send us a message...</h1>
                    </div>
                    <div className={styles.contactStyles}>
                        <form name="contact" method="POST" data-netlify="true">
                            <div className={styles.doubleInput}>
                                <div>
                                    <span>Your Name *</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                                <div>
                                    <span>Your Business</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.doubleInput}>
                                <div>
                                    <span>Telephone Number *</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                                <div>
                                    <span>Email Address *</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Enquiry</span>
                                    <div>
                                        <textarea />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.terms}>
                                <label>
                                    <input type="checkbox" name="privacy" value="accept" checked="checked" />
                                    <span>I agree to the terms outlined in the privacy policy</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="marketing" value="accept" checked="checked" />
                                    <span>I would like to receive marketing communications.</span>
                                </label>
                            </div>
                            <button>Send form</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className={`${styles.contactStyles} ${styles.mapStyles}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10209.86529296384!2d-5.277547317504885!3d50.22719254513101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e9abde5167232ca!2sHeadforwards!5e0!3m2!1sen!2suk!4v1523621792407"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    allowFullScreen
                />
            </section>
            <section>
                <div>
                    <h1>Recruitment</h1>
                    <p>If you are interested in joining the team here at Headforwards please take a look at our careers page to see if we have any suitable vacancies available.</p>
                    <p className={styles.bold}>We only recruit directly so, please, NO recruiters.</p>
                    <p>If you are a recruiter and still wish to call us then we will ask for a donation of at least £50 to the charity Shelter Box.</p>
                </div>
                <div>
                    <h1>Our Registered Office:</h1>
                    <ul>
                        <li>The Engine House</li>
                        <li>Wheal Kitty</li>
                        <li>St Agnes, Cornwall</li>
                        <li>TR5 0RD</li>
                    </ul>
                    <p>Headforwards is the trading name of Headforwards Solutions Ltd.</p>
                    <p>An Outsource Software Company registered in England and Wales with number 07576641</p>
                </div>
            </section>
        </>
    );
}
