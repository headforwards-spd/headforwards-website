import React from 'react';
import {flexRow} from './article-block-component.module.scss';

export default ArticleBlock;

ArticleBlock.defaultProps = {
    articles: []
}

function ArticleBlock({title, articles}) {
    return (
        <div>
            <h1>{title}</h1>
            <section>
                {articles.map(article => (<section className={flexRow}>
                    <img src={article.image}/>
                    <h1>{article.title}</h1>
                    <p>{article.post}</p>
                    <a href="#">Discover more</a>
                </section>))}
            </section>
        </div>
    );
}