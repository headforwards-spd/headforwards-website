import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Image from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import styles from './index-page.module.scss';

const PageLinkPropTypes = {
    link: string,
    linkText: string,
    page: {},
};

PageLink.propTypes = PageLinkPropTypes;
PageLink.defaultProps = {
    link: '',
    linkText: '',
    page: {},
};

IndexPageTemplate.propTypes = {
    pages: arrayOf(shape(PageLinkPropTypes)).isRequired,
};
export default function IndexPageTemplate({ pages }) {
    return <section className={styles.pages}>{!!pages && pages.map(page => <PageLink {...page} />)}</section>;
}

function PageLink({ link, linkText, page }) {
    const { frontmatter } = page || {};
    const { introduction, image } = frontmatter || {};
    const [{ text } = {}] = introduction || [];

    const { logo, arrow } = useStaticQuery(graphql`
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
        <Link to={link}>
            <article className={styles.page}>
                <h1>{linkText}</h1>
                <section>
                    {image && <Image image={image} alt={linkText} />}
                    {image && text && (
                        <section className={styles.introduction}>
                            <Image image={logo} alt={linkText} className={styles.logo} />
                            <ReactMarkdown source={truncate(text)} />
                        </section>
                    )}
                </section>
            </article>
        </Link>
    );
}

function truncate(string, maxLength = 150) {
    const truncate1 = string.substr(0, maxLength);
    const truncate2 = truncate1.substr(0, Math.min(truncate1.length, truncate1.lastIndexOf(' ')));

    return truncate2 === string ? string : `${truncate2}\u2026`;
}
