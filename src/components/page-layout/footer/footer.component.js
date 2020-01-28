import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { CompanyInfoPropType } from '../company-info.prop-type';
import Link from '../link/link.component';
import Socials from '../socials/socials.component';
import FooterLink, { FooterLinkPropType } from './footer-link.component';
import styles from './footer.module.scss';

export default Footer;

Footer.propTypes = {
    companyInfo: CompanyInfoPropType.isRequired,
    footerLinks: shape({
        title: string,
        links: arrayOf(FooterLinkPropType),
    }),
    callToAction: string,
};

Footer.defaultProps = {
    footerLinks: null,
    callToAction: '',
};
function Footer({ footerLinks, companyInfo, callToAction }) {
    const { companyName, email, address, phone } = companyInfo;
    const isFooter = true;
    const thisYear = new Date().getFullYear();
    const { title: footerLinksTitle, links } = footerLinks || {};

    return (
        <footer className={styles.footer}>
            <section>
                {!!links && (
                    <section className={styles.footerLinks}>
                        {!!footerLinksTitle && <h2>{footerLinksTitle}</h2>}
                        <section>
                            {links.map(link => (
                                <FooterLink {...link} />
                            ))}
                        </section>
                    </section>
                )}
                <section className={styles.getInTouch}>
                    <h2>
                        {callToAction}&nbsp;<Link to="/contact">Get in touch</Link>
                    </h2>
                </section>
            </section>

            <Socials {...{ ...companyInfo, isFooter }} />

            <address>
                {(email || phone) && (
                    <section className={styles.contact}>
                        {!!email && <Link to={`mailto:${email}`}>{email}</Link>}
                        {!!phone && <Link to={`tel:${phone}`}>{phone}</Link>}
                    </section>
                )}
                <section>
                    <section className={styles.copyright}>
                        &copy; {thisYear} {companyName}
                    </section>
                    <section className={styles.address}>{address}</section>
                    <section className={styles.legal}>
                        <Link to="/privacy-notice">Privacy Policy</Link>
                        <Link to="/terms-of-use">Terms of Use</Link>
                    </section>
                </section>
            </address>
        </footer>
    );
}
