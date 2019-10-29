import React               from 'react';
import PropTypes   from 'prop-types'
import Article             from './article.component'
import styles              from './images.module.scss';

export default BlogImages;

BlogImages.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.arrayOf()
};

export function BlogImages({title, articles}) {

    const colummStyle = articles.length > 2 ? styles.threeColumns : styles.twoColumns;

    return (
        <section className={styles.blogSection}>
            <h1>{title}</h1>
            <section className={styles.flexRow}>
                {articles.map((article, key) => <Article key={key} className={colummStyle} {...article}/>)}
            </section>
        </section>
    );
}
