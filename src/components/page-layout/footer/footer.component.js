import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Link from '../link/link.component';
import styles from './footer.module.scss';
import Socials from '../socials/socials.component';
import { CompanyInfoPropType } from '../company-info.prop-type';

export default Footer;

Footer.propTypes = {
    companyInfo: CompanyInfoPropType.isRequired,
    footerLinks: arrayOf(
        shape({
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

    const [{ link1, link2, link3, page1, page2, page3 }] = footerLinks || [{}];

    const hasFooterLinks = link1 && link2 && link3;

    return (
        <footer className={styles.footer}>
            {hasFooterLinks && (
                <section className={styles.footerLinks}>
                    <Link to={link1}>
                        <section>
                            <h2>{page1.frontmatter.title}</h2>
                            <ReactMarkdown source={page1.frontmatter.introduction.text} />
                        </section>
                    </Link>
                    <Link to={link2}>
                        <section>
                            <h2>{page2.frontmatter.title}</h2>
                            <ReactMarkdown source={page2.frontmatter.introduction.text} />
                        </section>
                    </Link>
                    <Link to={link3}>
                        <section>
                            <h2>{page3.frontmatter.title}</h2>
                            <ReactMarkdown source={page3.frontmatter.introduction.text} />
                        </section>
                    </Link>
                </section>
            )}
            <section className={styles.getInTouch}>
                <h2>
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
