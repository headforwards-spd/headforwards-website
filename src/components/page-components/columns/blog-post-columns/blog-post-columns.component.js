import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import BlogArticle, { BlogArticlePropType } from './blog-article.component';
import styles from './blog-post-columns.module.scss';

const blogPostColumnsPropTypes = {
    title: string,
    articles: arrayOf(BlogArticlePropType),
};

export default BlogPostColumns;
export const BlogPostColumnsPropType = shape(blogPostColumnsPropTypes);

BlogPostColumns.propTypes = blogPostColumnsPropTypes;
BlogPostColumns.defaultProps = {
    title: null,
    articles: [],
};
function BlogPostColumns({ title, articles }) {
    return (
        <section className={styles.blogPostColumns}>
            {!!title && <h1>{title}</h1>}
            <section>
                {articles.map(({ id, ...article }) => (
                    <BlogArticle key={id} {...article} />
                ))}
            </section>
        </section>
    );
}
