import { graphql } from 'gatsby';
import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import Layout from '../components/page-layout/layout';
import WordpressPageTemplate from '../components/page-templates/wordpress-page/wordpress-page.template';

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
            }
            html
        }
    }
`;

function WordpressPage({ data }) {
    const { page } = data;
    const { frontmatter, html } = page;
    const { title } = frontmatter;

    const headerProps = {
        title,
    };

    const templateProps = {
        ...frontmatter,
        html,
    };

    return (
        <Layout {...headerProps}>
            <WordpressPageTemplate {...templateProps} />
        </Layout>
    );
}
