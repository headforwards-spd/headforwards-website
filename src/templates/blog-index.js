import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import { BlogLinkPropType } from '../components/page-templates/index-page/blog-link.component';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

export default BlogIndex;

BlogIndex.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: string,
                components: arrayOf(PageComponentPropType),
            }),
        }),
        children: shape({
            nodes: arrayOf(BlogLinkPropType),
        }),
    }).isRequired,
};

function BlogIndex({ data }) {
    const { page, children } = data;
    const { frontmatter } = page;
    const { nodes: pages } = children;

    const layoutProps = extractLayoutProps(page);
    const { introduction, components } = frontmatter;
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
            ...PageFragment
        }
        children: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog-page" } } }
            sort: { fields: frontmatter___publishedDate }
        ) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    parent
                    title
                    summary {
                        image {
                            ...ImageSquareFragment
                        }
                        text
                    }
                    publishedDate
                    author {
                        frontmatter {
                            name
                        }
                    }
                }
            }
        }
    }
`;
