import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './index-page.module.scss';

const indexArticlePropTypes = {
    link: string.isRequired,
    title: string.isRequired,
    summary: shape({
        image: ImageSrcPropType,
        text: string,
    }).isRequired,
};

export default IndexArticle;
export const IndexArticlePropType = shape(indexArticlePropTypes);

IndexArticle.propTypes = indexArticlePropTypes;
IndexArticle.defaultProps = {};

function IndexArticle({ link, title, summary }) {
    const { image, text } = summary || {};

    return (
        <article className={styles.page}>
            <Link to={link}>
                <h2>{title}</h2>
                <section>
                    {image && <Image image={image} alt={title} ratio="100%" />}
                    {image && text && (
                        <section className={styles.introduction}>
                            <Markdown source={text} truncate />
                        </section>
                    )}
                </section>
            </Link>
        </article>
    );
}
