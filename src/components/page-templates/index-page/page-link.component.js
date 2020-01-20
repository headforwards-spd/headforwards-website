import { graphql, useStaticQuery } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import styles from './index-page.module.scss';

const pageLinkPropTypes = {
    link: string,
    linkText: string,
    page: {},
};

export default PageLink;
export const PageLinkPropType = shape(pageLinkPropTypes);

PageLink.propTypes = pageLinkPropTypes;
PageLink.defaultProps = {
    link: '',
    linkText: '',
    page: {},
};

function PageLink({ link, linkText, page }) {
    const { frontmatter } = page || {};
    const { introduction, image } = frontmatter || {};
    const { image: introImage } = image || {};
    const { text: introText } = introduction || {};

    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(name: { eq: "icon.white" }) {
                childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <article className={styles.page}>
            <Link to={link}>
                <h2>{linkText}</h2>
                <section>
                    {introImage && <Image image={introImage} alt={linkText} />}
                    {introImage && introText && (
                        <section className={styles.introduction}>
                            <Image image={logo} alt={linkText} className={styles.logo} />
                            <ReactMarkdown source={introText} />
                        </section>
                    )}
                </section>
            </Link>
        </article>
    );
}
