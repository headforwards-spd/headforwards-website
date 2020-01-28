import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import styles from './article-columns.module.scss';
import Article, { ArticlePropType } from './article.component';

const articleColumnsPropTypes = {
    title: string,
    articles: arrayOf(ArticlePropType),
};

export default ArticleColumns;
export const ArticleColumnsPropType = shape(articleColumnsPropTypes);

ArticleColumns.propTypes = articleColumnsPropTypes;
ArticleColumns.defaultProps = {
    title: null,
    articles: [],
};
function ArticleColumns({ title, articles }) {
    const columnsStyle = articles.length === 3 ? styles.isThreeColumns : '';
    return (
        <section className={styles.articleColumns}>
            {!!title && <h2>{title}</h2>}
            {!!articles && (
                <section className={columnsStyle}>
                    {articles.map(({ id, ...article }) => (
                        <Article key={id} {...article} />
                    ))}
                </section>
            )}
        </section>
    );
}
