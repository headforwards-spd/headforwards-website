import React from 'react';
import { shape, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../../image/image.component';
import { ReactComponent as Arrow } from '../../../../../static/img/hf-arrow.svg';
import Link from '../../../link/link.component';
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
        <section className={styles.article}>
            <h1>{title}</h1>
            <Image className={styles.image} image={image} />
            <Link to={link}>
                <Arrow />
            </Link>
        </section>
    );
}
