import React from 'react';
import Link from '../../link/link.component';
import styles from './footer.module.scss';
import Socials from '../socials/socials.component';
import { CompanyInfoPropType } from '../company-info.prop-type';

export default Footer;

Footer.propTypes = {
    companyInfo: CompanyInfoPropType.isRequired,
};
function Footer({ companyInfo }) {
    const { email, address, phone } = companyInfo;
    const isFooter = true;
    const thisYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <section className={styles.getInTouch}>
                <h1>
                    Want to know more about how we use mobbing to deliver quality software?
                    <Link to="get-in-touch">Get in touch</Link>
                </h1>
            </section>

            <Socials {...{ ...companyInfo, isFooter }} />

            <address>
                <section className={styles.contact}>
                    <Link to={`mailto:${email}`}>{email}</Link>
                    <Link to={`tel:${phone}`}>{phone}</Link>
                </section>
                <section>
                    <section className={styles.copyright}>&copy; {thisYear} Headforwards</section>
                    <section className={styles.address}>{address}</section>
                    <section className={styles.legal}>
                        <Link to="privacy-policy">Privacy Policy</Link>
                        <Link to="terms-and-conditions">Terms &amp; Conditions</Link>
                    </section>
                </section>
            </address>
        </footer>
    );
}
