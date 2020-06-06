import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './index-page.module.scss';

const BlogLinkPropTypes = {
    fields: shape({ link: string }).isRequired,
    frontmatter: shape({
        summary: shape({
            image: ImageSrcPropType,
            text: string,
        }),
        author: shape({
            frontmatter: shape({
                name: string,
            }),
        }),
    }).isRequired,
};

export default BlogLink;
export const BlogLinkPropType = shape(BlogLinkPropTypes);

BlogLink.propTypes = BlogLinkPropTypes;

function BlogLink({ fields, frontmatter }) {
    const { link } = fields;
    const { title, summary, author: authorPage } = frontmatter || {};
    const {
        frontmatter: { name: author },
    } = authorPage || {};

    const { text } = summary || {};
    const image = getImage(summary);

    return (
        <Link to={link} title={title} className={styles.blogLink}>
            <article>
                <header>
                    <h2>{title}</h2>
                    {author && <p>{`By ${author}`}</p>}
                </header>
                <Image image={image} className={styles.image} alt={title} />
                <section>
                    <Markdown source={text} truncate />
                </section>
                <div className={styles.readMore}>Read more</div>
            </article>
        </Link>
    );
}

function getImage({ imageMobile, imageTablet, imageDesktop }) {
    const { publicURL, extension } = imageMobile || {};

    if (!publicURL || extension === 'svg') {
        return null;
    }

    return {
        publicURL,
        extension,
        childImageSharp: {
            fluid: [
                { ...imageMobile.childImageSharp.fluid, media: `(max-width: 767px)` },
                { ...imageTablet.childImageSharp.fluid, media: `(min-width: 768px) and (max-width: 1023px)` },
                { ...imageDesktop.childImageSharp.fluid, media: `(min-width: 1024px)` },
            ],
        },
    };
}
