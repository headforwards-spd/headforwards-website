import { string } from 'prop-types';
import React from 'react';

import Form from '../../page-components/forms/contact-form/contact-form.component';
import Link from '../../page-layout/link/link.component';
import styles from './contact.module.scss';

export const contactPropTypes = {
    companyName: string,
    email: string,
    phone: string,
    address: string,
    registeredAddress: string,
    mapUrl: string,
};

export default Contact;

Contact.propTypes = contactPropTypes;
Contact.defaultProps = {
    companyName: '',
    email: '',
    phone: '',
    address: '',
    registeredAddress: '',
    mapUrl: null,
};

function Contact({ companyName, mapUrl, email, phone, address, registeredAddress }) {
    const formattedAddress = address.split(',');
    const formattedRegAddress = registeredAddress.split(',');

    return (
        <section className={styles.contactColumns}>
            <header>
                <h2>We would love to talk business with you.</h2>
            </header>
            <section>
                <address>
                    <section>
                        <h2>{companyName}</h2>
                        {formattedAddress.map(item => (
                            <span key={item}>{item}</span>
                        ))}
                    </section>
                    <dl>
                        <dt>Telephone.</dt>
                        <dd>
                            <Link to={`tel:${phone}`}>{phone}</Link>
                        </dd>
                        <dt>Email.</dt>
                        <dd>
                            <Link to={`mailto:${email}`}>{email}</Link>
                        </dd>
                        <dt>Recruitment Agencies.</dt>
                        <dd>
                            <Link to="/careers/recruitment-agencies/">Please click here</Link>
                        </dd>
                        <dt>Helpdesk.</dt>
                        <dd>
                            <a href="https://support.headforwards.com/" target="_blank" rel="noreferrer">
                                Submit support ticket
                            </a>
                        </dd>
                    </dl>
                </address>
                <Form formName="contact" />
            </section>
            {mapUrl && (
                <section className={styles.map}>
                    <iframe
                        title={companyName}
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </section>
            )}
            <section className={styles.office}>
                <section>
                    <h2>Recruitment</h2>
                    <p>
                        If you are interested in joining the team here at Headforwards please take a look at our careers
                        page to see if we have any suitable vacancies available.{' '}
                    </p>
                    <p>
                        <strong>We only recruit directly so, please, NO recruiters.</strong>
                    </p>
                    <p>
                        We have a great in-house team and we have never used an agency. We don&apos;t see this changing,
                        we don&apos;t have a PSL and we don&apos;t keep details of anyone who does call or email us. All
                        of our recruitment goes through the team, not directly with any of the Hiring Managers. We just
                        want to save your time by letting you know this so please don&apos;t contact us. Thank you for
                        understanding.
                    </p>
                </section>
                <section>
                    <h2>Our Registered Office:</h2>
                    <ul>
                        {formattedRegAddress.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p>Headforwards is the trading name of Headforwards Solutions Ltd.</p>
                    <p>An Outsource Software Company registered in England and Wales with number 07576641</p>
                </section>
                <section>
                    <h2>Helpdesk</h2>
                    <p>
                        If you are looking for IT support relating to a website or hosting we provide for your business.
                        Please click below to submit a support ticket.
                    </p>
                    <a href="https://support.headforwards.com/" target="_blank" rel="noreferrer">
                        Submit support ticket
                    </a>
                </section>
            </section>
        </section>
    );
}
