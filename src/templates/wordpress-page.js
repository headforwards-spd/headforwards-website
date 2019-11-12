import { graphql } from 'gatsby';
import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import Layout from '../components/page-layout/layout';
import WordpressContent from '../components/page-layout/wordpress-content/wordpress-content.component';

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
    query WordpressPage($id: String!) {
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
    }
`;

function WordpressPage({ data }) {
    const { page } = data;
    const { frontmatter, html } = page;
    const { author, categories, tags, date, content, ...header } = frontmatter;

    return (
        <Layout {...header}>
            <dl>
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
        </Layout>
    );
}
