import { shape, string, arrayOf } from 'prop-types';
import React from 'react';
import Article, { ArticlePropType } from './article.component';
import styles from './articles.module.scss';

const articlesPropTypes = {
    title: string,
    articles: arrayOf(ArticlePropType),
};

export default Articles;
export const ArticlesPropType = shape(articlesPropTypes);

Articles.propTypes = articlesPropTypes;
Articles.defaultProps = {
    title: null,
    articles: [],
};
function Articles({ title, articles }) {
    const columnsStyle = articles.length === 3 ? styles.isThreeColumns : '';
    return (
        <section className={styles.articles}>
            {!!title && <h1>{title}</h1>}
            {!!articles && (
                <section className={columnsStyle}>
                    {articles.map((article, key) => (
                        <Article key={key} {...article} />
                    ))}
                </section>
            )}
        </section>
    );
}
