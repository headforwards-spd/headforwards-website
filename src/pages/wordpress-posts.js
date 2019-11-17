import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import NewsPageTemplate from '../components/page-templates/wordpress-post/news/news.template';

export default NewsPage;

NewsPage.propTypes = {
    data: shape({
        nodes: arrayOf(
            shape({
                id: string,
                frontmatter: shape({
                    title: string,
                    headerImages: arrayOf(
                        shape({
                            image: string,
                            text: string,
                        })
                    ),
                    excerpt: string,
                    path: string,
                    date: string,
                    dateString: string,
                }),
            })
        ),
    }).isRequired,
};
function NewsPage({ data }) {
    const props = {
        title: 'Old Wordpress Posts',
    };

    return (
        <Layout {...props}>
            <NewsPageTemplate {...data} />
        </Layout>
    );
}

export const query = graphql`
    query AllWordpressPosts {
        items: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "wordpress-post" } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    headerImages {
                        image
                        text
                    }
                    excerpt
                    path
                    date
                    dateString: date(fromNow: true)
                }
            }
        }
    }
`;
