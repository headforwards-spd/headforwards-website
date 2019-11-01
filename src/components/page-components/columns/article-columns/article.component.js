import React from 'react';
import { shape, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../../image/image.component';
import Link from '../../../link/link.component';
import styles from './article-columns.module.scss';

const articlePropTypes = {
    title: string.isRequired,
    text: string.isRequired,
    image: ImageSrcPropType.isRequired,
    link: string,
    linkText: string,
};

export default Article;
export const ArticlePropType = shape(articlePropTypes);

Article.propTypes = articlePropTypes;
Article.defaultProps = {
    link: null,
    linkText: null,
};
function Article({ title, text, image, link, linkText }) {
    const hasLink = !!link && !!linkText;

    return (
        <section className={styles.article}>
            <h1>{title}</h1>
            <Image image={image} className={styles.image} />
            <p>{text}</p>
            {hasLink && <Link to={link}>{linkText}</Link>}
        </section>
    );
}
