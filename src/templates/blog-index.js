import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import { BlogLinkPropType } from '../components/page-templates/index-page/blog-link.component';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

export default BlogIndex;

BlogIndex.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
            }),
        }),
        children: shape({
            nodes: arrayOf(BlogLinkPropType),
        }),
    }).isRequired,
};

function BlogIndex({ data }) {
    const { page, children } = data || {};
    const { frontmatter } = page || {};
    const { nodes: pages } = children || {};

    const layoutProps = extractLayoutProps(page);
    const { introduction, components } = frontmatter || {};
    const pageProps = {
        introduction,
        components,
        pages,
    };

    return (
        <Layout {...layoutProps}>
            <IndexPageTemplate {...pageProps} isBlog />
        </Layout>
    );
}

export const query = graphql`
    query BlogIndex($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                ...PageFragment
            }
        }
        children: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog-page" } } }
            sort: { fields: frontmatter___publishedDate, order: DESC }
        ) {
            nodes {
                id
                fields {
                    link
                }
                frontmatter {
                    parent
                    title
                    author {
                        frontmatter {
                            name
                        }
                    }
                    summary {
                        ...BlogSummaryImageFragment
                        text
                    }
                    publishedDate
                }
            }
        }
    }
`;
