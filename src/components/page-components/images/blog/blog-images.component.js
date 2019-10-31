import React                        from 'react';
import PropTypes                    from 'prop-types'
import Article, { ArticlePropType } from './article.component'
import styles                       from './blog-images.module.scss';

export default BlogImages;

BlogImages.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.shape(ArticlePropType)).isRequired
};

BlogImages.defaultProps = {
    articles: []
};

export function BlogImages({title, articles}) {

    return (
        <section className={styles.blogImages}>
            <h1>{title}</h1>
            <section>
                {articles.map((article, key) => <Article key={key} {...article}/>)}
            </section>
        </section>
    );
}
