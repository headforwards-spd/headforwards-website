import { shape, string, arrayOf } from 'prop-types';
import React from 'react';
import Article, { ArticlePropType } from './article.component';
import styles from './article-columns.module.scss';

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
            {!!title && <h1>{title}</h1>}
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
