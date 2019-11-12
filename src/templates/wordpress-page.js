import { graphql } from 'gatsby';
import React from 'react';
import parseHtml from 'html-react-parser';
import { shape, string, arrayOf } from 'prop-types';
import Link from '../components/link/link.component';
import Layout from '../components/page-layout/layout';
import WordpressContent from '../components/page-layout/wordpress-content/wordpress-content.component';
import styles from './wordpress-page.modules.scss';

export default WordpressPage;

WordpressPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                title: string.isRequired,
                author: shape({
                    name: string.isRequired,
                }).isRequired,
                categories: arrayOf(string).isRequired,
                tags: arrayOf(string).isRequired,
                date: string.isRequired,
            }),
        }),
    }).isRequired,
};

export const query = graphql`
    query WordpressPage($id: String!, $prevId: String!, $nextId: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                author {
                    name
                }
                categories
                tags
                date(fromNow: true)
            }
            html
        }
        prev: markdownRemark(id: { eq: $prevId }) {
            frontmatter {
                title
                path
                excerpt
                date(fromNow: true)
            }
        }
        next: markdownRemark(id: { eq: $nextId }) {
            frontmatter {
                title
                path
                excerpt
                date(fromNow: true)
            }
        }
    }
`;

function WordpressPage({ data }) {
    const { page, prev, next } = data;
    const { frontmatter, html } = page;
    const { author, categories, tags, date, content, ...header } = frontmatter;

    return (
        <Layout {...header}>
            <dl className={styles.dataTable}>
                <dd>Author</dd>
                <dt>{author.name}</dt>
                <dd>Categories</dd>
                <dt>{categories.join(', ')}</dt>
                <dd>Tags</dd>
                <dt>{tags.join(', ')}</dt>
                <dd>Date</dd>
                <dt>{date}</dt>
            </dl>
            <WordpressContent content={html} />
            {prev && (
                <Link to={`/wordpress-blog${prev.frontmatter.path}`}>
                    <section className={styles.prev}>
                        <h1>{parseHtml(prev.frontmatter.title)}</h1>
                        <p>{prev.frontmatter.excerpt}</p>
                        <p>{prev.frontmatter.date}</p>
                    </section>
                </Link>
            )}
            {next && (
                <Link to={`/wordpress-blog${next.frontmatter.path}`}>
                    <section className={styles.next}>
                        <h1>{parseHtml(next.frontmatter.title)}</h1>
                        <p>{next.frontmatter.excerpt}</p>
                        <p>{next.frontmatter.date}</p>
                    </section>
                </Link>
            )}
        </Layout>
    );
}
