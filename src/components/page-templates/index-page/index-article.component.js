import { graphql, useStaticQuery } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './index-page.module.scss';

const indexArticlePropTypes = {
    link: string.isRequired,
    title: string.isRequired,
    image: ImageSrcPropType,
    introduction: string.isRequired,
};

export default IndexArticle;
export const IndexArticlePropType = shape(indexArticlePropTypes);

IndexArticle.propTypes = indexArticlePropTypes;
IndexArticle.defaultProps = {
    image: null,
};

function IndexArticle({ link, title, image, introduction }) {
    let logo;

    try {
        const { logo: graphLogo } = useStaticQuery(graphql`
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
        logo = graphLogo;
    } catch (e) {
        logo = '/images/icon.white.png';
    }

    return (
        <article className={styles.page}>
            <Link to={link}>
                <h2>{title}</h2>
                <section>
                    {image && <Image image={image} alt={title} />}
                    {image && introduction && (
                        <section className={styles.introduction}>
                            <Image image={logo} alt={title} className={styles.logo} />
                            <Markdown source={introduction} truncate />
                        </section>
                    )}
                </section>
            </Link>
        </article>
    );
}
