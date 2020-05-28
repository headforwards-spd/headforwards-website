import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import BlogPageTemplate from '../components/page-templates/blog-page/blog-page.template';

export default BlogPagePage;

BlogPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: string,
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
};

function BlogPagePage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { title } = frontmatter;

    const layoutProps = extractLayoutProps(page);

    const { introduction, author: authorPage, components, publishedDate } = frontmatter;
    const { frontmatter: author } = authorPage || {};
    const pageProps = {
        title,
        introduction,
        author,
        publishedDate,
        components,
    };

    return (
        <Layout {...layoutProps}>
            <BlogPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query BlogPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
    }
`;
