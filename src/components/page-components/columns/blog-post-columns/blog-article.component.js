import React from 'react';
import { shape, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import { ReactComponent as Arrow } from '../../../../../static/images/hf-arrow.svg';
import Link from '../../../page-layout/link/link.component';
import styles from './blog-post-columns.module.scss';

const blogArticlePropTypes = {
    title: string.isRequired,
    image: ImageSrcPropType.isRequired,
    link: string.isRequired,
};

export default BlogArticle;
export const BlogArticlePropType = shape(blogArticlePropTypes);

BlogArticle.propTypes = blogArticlePropTypes;
function BlogArticle({ title, image, link }) {
    return (
        <Link to={link} aria-label={title}>
            <section className={styles.article}>
                <h2>{title}</h2>
                <Image className={styles.image} image={image} />
                <Link to={link} aria-label={title}>
                    <Arrow />
                </Link>
            </section>
        </Link>
    );
}
