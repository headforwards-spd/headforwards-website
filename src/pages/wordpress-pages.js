import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Link from '../components/page-layout/link/link.component';
import Layout from '../components/page-layout/layout';
import styles from '../components/page-templates/wordpress-post/news/news.module.scss';

export default NewsPage;

NewsPage.propTypes = {
    data: shape({
        nodes: arrayOf(
            shape({
                id: string,
                frontmatter: shape({
                    title: string,
                    excerpt: string,
                    path: string,
                }),
            })
        ),
    }).isRequired,
};
function NewsPage({ data }) {
    const props = {
        title: 'Old Wordpress Pages',
    };

    const { items } = data;
    const { nodes: pages } = items;

    return (
        <Layout {...props}>
            <section className={styles.newsSummary}>
                {pages.map(({ id: key, frontmatter }) => {
                    const { title, excerpt, path } = frontmatter;
                    return (
                        <Link key={key} to={`/old/${path}`} className={styles.newsItem}>
                            <article>
                                <h1>{title}</h1>
                                <p>{excerpt}</p>
                                <Link to={`/old/${path}`} className={styles.readMore}>
                                    Read more
                                </Link>
                            </article>
                        </Link>
                    );
                })}
            </section>
        </Layout>
    );
}

export const query = graphql`
    query AllWordpressPages {
        items: allMarkdownRemark(filter: { frontmatter: { type: { eq: "wordpress-page" } } }) {
            nodes {
                id
                frontmatter {
                    title
                    excerpt
                    path
                }
            }
        }
    }
`;
