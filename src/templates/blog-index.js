import { graphql } from 'gatsby';
import React from 'react';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

export default BlogIndex;

// JobsPage.propTypes = {
//     data: shape({
//         page: shape({
//             frontmatter: shape({
//                 introduction: string,
//                 components: arrayOf(PageComponentPropType),
//                 footerText: string,
//             }),
//         }),
//         jobs: shape({
//             nodes: arrayOf(
//                 shape({
//                     id: string,
//                     title: string,
//                     path: string,
//                     created: string,
//                 })
//             ),
//         }),
//         filters: shape({
//             departments: arrayOf(
//                 shape({
//                     label: string.isRequired,
//                     slug: string.isRequired,
//                 })
//             ),
//             tags: arrayOf(
//                 shape({
//                     label: string.isRequired,
//                     slug: string.isRequired,
//                 })
//             ),
//         }).isRequired,
//         tags: shape({
//             distinct: arrayOf(string),
//         }).isRequired,
//     }).isRequired,
// };

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
