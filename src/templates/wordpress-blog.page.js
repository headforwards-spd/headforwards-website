import { graphql } from 'gatsby';
import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import Layout from '../components/page-layout/layout';
import WordpressBlogPageTemplate from '../components/page-templates/wordpress-blog-page/wordpress-blog-page.template';

export default WordpressBlogPage;

WordpressBlogPage.propTypes = {
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
                headerImages {
                    image
                    text
                }
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

function WordpressBlogPage({ data }) {
    const { page, prev, next } = data;
    const { frontmatter, html } = page;
    const { title, headerImages } = frontmatter;

    const [firstHeaderImage = {}] = headerImages;
    const { image = null } = firstHeaderImage;

    const headerProps = {
        title,
        image,
    };

    const templateProps = {
        prev,
        next,
        ...frontmatter,
        html,
    };

    return (
        <Layout {...headerProps}>
            <WordpressBlogPageTemplate {...templateProps} />
        </Layout>
    );
}
