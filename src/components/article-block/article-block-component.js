import React                               from 'react';
import Image                               from '../image/image-component';
import {flexRow, threeCol, twoCol, articleRow} from './article-block-component.module.scss';

export default ArticleBlock;

ArticleBlock.defaultProps = {
    articles: []
};

function ArticleBlock({title, articles}) {
    const articleLength = articles.length === 3 ? threeCol : twoCol;
    console.log(articles);
    return (
        <div className={`${flexRow} ${articleRow}`}>
            <h1>{title}</h1>
            <section className={`${flexRow}`}>
                {articles.map((article, key) => (
                    <section className={articleLength} key={key}>
                        <Image image={article.image}/>
                        <h1>{article.title}</h1>
                        <p>{article.text}</p>
                        {/*<Link to={}>Label</Link>*/}
                        {/*<a href="#">Discover more</a>*/}
                    </section>
                ))}
            </section>
        </div>
    );
}
