import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import BlogArticle, { BlogArticlePropType } from './blog-article.component';
import styles from './blog-images.module.scss';

const blogImagesPropTypes = {
    title: string,
    articles: arrayOf(BlogArticlePropType),
};

export default BlogImages;
export const BlogImagesPropType = shape(blogImagesPropTypes);

BlogImages.propTypes = blogImagesPropTypes;
BlogImages.defaultProps = {
    title: null,
    articles: [],
};
function BlogImages({ title, articles }) {
    return (
        <section className={styles.blogImages}>
            {!!title && <h1>{title}</h1>}
            <section>
                {articles.map((article, key) => (
                    <BlogArticle key={key} {...article} />
                ))}
            </section>
        </section>
    );
}
