import React   from 'react';
import Article from './article.component'
import styles  from './articles.module.scss';

export default Articles;

Articles.defaultProps = {
    articles: []
};

function Articles({title, articles}) {
    const columnsStyle = articles.length === 3 ? styles.isThreeColumns : '';
    return (
        <section className={styles.articles}>
            <h1>{title}</h1>
            <section className={columnsStyle}>
                {articles.map((article, key) => <Article key={key} {...article} />)}
            </section>
        </section>
    );
}
