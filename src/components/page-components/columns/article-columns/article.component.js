import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import Markdown from '../../../page-layout/markdown';
import styles from './article-columns.module.scss';

const articlePropTypes = {
    title: string.isRequired,
    text: string.isRequired,
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

function Article({ link: linkPage, linkText }) {
    const { fields: { link } = {}, frontmatter: { title, summary: { text, image } = {} } = {} } = linkPage || {};
    const hasLink = !!link && !!linkText;

    return (
        <section className={styles.article}>
            <h2>{title}</h2>
            <Image image={image} className={styles.image} />
            <section>
                <Markdown source={text} />
            </section>
            {hasLink && <Link to={link}>{linkText}</Link>}
        </section>
    );
}
