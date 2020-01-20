import React from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import Link from '../link/link.component';
import styles from './footer.module.scss';
import Socials from '../socials/socials.component';
import { CompanyInfoPropType } from '../company-info.prop-type';
import FooterLink from './footer-link.component';

export default Footer;

Footer.propTypes = {
    companyInfo: CompanyInfoPropType.isRequired,
    footerLinks: arrayOf(
        shape({
            title: string,
            showImages: bool,
            link1: string.isRequired,
            link2: string.isRequired,
            link3: string.isRequired,
        })
    ),
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

    const [{ title, showImages, link1, link2, link3, page1, page2, page3 }] = footerLinks || [{}];

    const hasFooterLinks = link1 && link2 && link3;

    return (
        <footer className={styles.footer}>
            <section>
                {hasFooterLinks && (
                    <section className={styles.footerLinks}>
                        {title && <h2>{title}</h2>}
                        <section>
                            <FooterLink {...{ showImages, link: link1, page: page1 }} />
                            <FooterLink {...{ showImages, link: link2, page: page2 }} />
                            <FooterLink {...{ showImages, link: link3, page: page3 }} />
                        </section>
                    </section>
                )}
                <h2 className={styles.getInTouch}>
                    {callToAction}
                    <Link to="/contact">Get in touch</Link>
                </h2>
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
