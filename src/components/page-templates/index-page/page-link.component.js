import { graphql, useStaticQuery }  from 'gatsby';
import { any, bool, shape, string } from 'prop-types';
import React                        from 'react';

import Markdown from '../../page-components/markdown';
import Postit from '../../page-components/postit/postit.component';
import Image from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import styles from './index-page.module.scss';

const pageLinkPropTypes = {
    link: string,
    linkText: string,
    page: any,
    isPostit: bool,
};

export default PageLink;
export const PageLinkPropType = shape(pageLinkPropTypes);

PageLink.propTypes = pageLinkPropTypes;
PageLink.defaultProps = {
    link: '',
    linkText: '',
    page: null,
    isPostit: false,
};

function PageLink({ isPostit, link, linkText, page }) {
    const { frontmatter } = page || {};
    const { introduction, image } = frontmatter || {};
    const { image: introImage } = image || {};
    const { text: introText } = introduction || {};

    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(name: { eq: "icon.white" }) {
                childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 100, quality: 85) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return !isPostit ? (
        <article className={styles.page}>
            <Link to={link}>
                <h2>{linkText}</h2>
                <section>
                    {introImage && <Image image={introImage} alt={linkText} />}
                    {introImage && introText && (
                        <section className={styles.introduction}>
                            <Image image={logo} alt={linkText} className={styles.logo} />
                            <Markdown source={introText} truncate />
                        </section>
                    )}
                </section>
            </Link>
        </article>
    ) : (
        <Postit className={`${styles.postit}`}>
            <Link to={link}>
                <h2>{linkText}</h2>
                <Markdown source={introText} truncate />
                <div className={styles.readMore}>Read more</div>
            </Link>
        </Postit>
    );
}
