import { string } from 'prop-types';
import React from 'react';
import styles from './contact.module.scss';

const contactPropTypes = {
    email: string,
    phone: string,
    address: string,
    registeredAddress: string,
};

export default ContactTemplate;

ContactTemplate.propTypes = contactPropTypes;
ContactTemplate.defaultProps = {
    email: '',
    phone: '',
    address: '',
    registeredAddress: string,
};

function ContactTemplate({ email, phone, address, registeredAddress }) {
    const formattedAddress = address.split(',');
    const formattedRegAddress = registeredAddress.split(',');

    return (
        <section className={styles.contactColumns}>
            <h1>We would love to talk business with you.</h1>
            <section>
                <address>
                    <section>
                        <h1>REPLACE WITH CONSTANT</h1>
                        {formattedAddress.map(item => (
                            <span>{item}</span>
                        ))}
                    </section>
                    <dl>
                        <dt>Telephone.</dt>
                        <dd>{phone}</dd>
                        <dt>Email.</dt>
                        <dd>{email}</dd>
                    </dl>
                </address>
                <form name="contact" method="POST" data-netlify="true">
                    <h1>Send us a message...</h1>
                    <section>
                        <label>
                            Your Name *
                            <input type="text" />
                        </label>
                        <label>
                            Your Business
                            <input type="text" />
                        </label>
                    </section>
                    <section>
                        <label>
                            Telephone Number *
                            <input type="text" />
                        </label>
                        <label>
                            Email Address *
                            <input type="text" />
                        </label>
                    </section>
                    <label>
                        Enquiry
                        <textarea rows="6" />
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" name="privacy" value="accept" />I agree to the terms outlined in the
                        privacy policy
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" name="marketing" value="accept" />I would like to receive marketing
                        communications.
                    </label>
                    <button type="submit">Send form</button>
                </form>
            </section>
            <section className={styles.map}>
                <iframe
                    title="Headforwards"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10209.86529296384!2d-5.277547317504885!3d50.22719254513101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e9abde5167232ca!2sHeadforwards!5e0!3m2!1sen!2suk!4v1523621792407"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                />
            </section>
            <section className={styles.office}>
                <section>
                    <h1>Recruitment</h1>
                    <p>
                        If you are interested in joining the team here at Headforwards please take a look at our careers
                        page to see if we have any suitable vacancies available.{' '}
                    </p>
                    <p>
                        <strong>We only recruit directly so, please, NO recruiters.</strong>
                    </p>
                    <p>
                        If you are a recruiter and still wish to call us then we will ask for a donation of at least £50
                        to the charity Shelter Box.
                    </p>
                </section>
                <section>
                    <h1>Our Registered Office:</h1>
                    <ul>
                        {formattedRegAddress.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                    <p>Headforwards is the trading name of Headforwards Solutions Ltd.</p>
                    <p>An Outsource Software Company registered in England and Wales with number 07576641</p>
                </section>
            </section>
        </section>
    );
}
