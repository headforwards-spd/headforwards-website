import React, { Fragment } from 'react';
import styles from './contact.module.scss';

export default ContactTemplate;

ContactTemplate.propTypes = {};

function ContactTemplate({ email, phone, address }) {
    // const { email } = companyInfo;
    return (
        <>
            <section className={styles.contactStyles}>
                <div className={styles.flexSection}>We would love to talk business with you.</div>
                <div className={styles.flexSection}>
                    <p>Headforwards</p>
                    {address}
                </div>
                <div className={styles.flexSection}>
                    <p>Telephone.</p>
                    {phone}
                    <p>Email.</p>
                    {email}
                </div>
            </section>
            <section className={styles.contactStyles}>
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name:</label>
                        <input type="text" name="name" />
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Enquiry: <textarea name="message" />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </section>
            <section className={styles.contactStyles}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10209.86529296384!2d-5.277547317504885!3d50.22719254513101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e9abde5167232ca!2sHeadforwards!5e0!3m2!1sen!2suk!4v1523621792407"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    allowFullScreen
                />
            </section>
            <section className={styles.contactStyles} />
        </>
    );
}
