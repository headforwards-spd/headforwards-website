import {Link}                                  from '@reach/router';
import React                                   from 'react';
import Image                                   from '../image/image-component';
import styles from './article-block-component.module.scss';

export default ArticleBlock;

ArticleBlock.defaultProps = {
    articles: []
};

function ArticleBlock({title, articles}) {
    const articleLength = articles.length === 3 ? styles.threeCol : styles.twoCol;
    return (
        <div className={`${styles.flexRow} ${styles.articleRow}`}>
            <h1>{title}</h1>
            <section className={`${styles.flexRow}`}>
                {articles.map((article, key) => (
                    <section className={articleLength} key={key}>
                        <Image image={article.image}/>
                        <h1>{article.title}</h1>
                        <p>{article.text}</p>
                        {!!article.link && <Link to={article.link}>{article.link_text}</Link>}
                    </section>
                ))}
            </section>
        </div>
    );
}
