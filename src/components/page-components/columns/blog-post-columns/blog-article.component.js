import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import styles from './blog-post-columns.module.scss';

const blogArticlePropTypes = {
    link: shape({
        fields: shape({
            link: string,
        }),
        frontmatter: shape({
            title: string,
            summary: shape({
                image: ImageSrcPropType,
            }),
        }),
    }).isRequired,
};

export default BlogArticle;
export const BlogArticlePropType = shape(blogArticlePropTypes);

BlogArticle.propTypes = blogArticlePropTypes;

function BlogArticle({ link: linkPage }) {
    const { fields: { link } = {}, frontmatter: { title, summary: { image } = {} } = {} } = linkPage || {};
    return (
        <Link to={link} aria-label={title}>
            <section className={styles.article}>
                <h2>{title}</h2>
                <Image className={styles.image} image={image} />
            </section>
        </Link>
    );
}
