import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import Markdown from '../../../page-layout/markdown';
import styles from './article-columns.module.scss';

const articleProps = {
    linkText: string.isRequired,
    link: shape({
        fields: shape({
            link: string,
        }),
        frontmatter: shape({
            title: string,
            summary: shape({
                image: ImageSrcPropType,
                text: string,
            }),
        }),
    }).isRequired,
};

export default Article;
export const ArticlePropType = shape(articleProps);

Article.propTypes = articleProps;
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
