import React from 'react';
import {flexRow, flexCol, twoCol, threeCol} from './article-block-component.module.scss';

export default ArticleBlock;

ArticleBlock.defaultProps = {
    articles: []
};

function ArticleBlock({title, articles}) {
    const articleLength = articles.length === 3 ? threeCol : twoCol;
    return (
        <div>
            <h1>{title}</h1>
            <section className={flexRow}>
                {articles.map(article => (<section className={articleLength}>
                    <img src={article.image}/>
                    <h1>{article.title}</h1>
                    <p>{article.post}</p>
                    <a href="#">Discover more</a>
                </section>))}
            </section>
        </div>
    );
}