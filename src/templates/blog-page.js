import { graphql }                      from 'gatsby';
import moment                           from 'moment';
import { arrayOf, bool, shape, string } from 'prop-types';
import React                            from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import BlogPageTemplate from '../components/page-templates/blog-page/blog-page.template';

export default BlogPagePage;

BlogPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape({
                    show: bool.isRequired,
                    text: string.isRequired,
                }),
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
};

function BlogPagePage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const {
        introduction,
        author: authorPage,
        components,
        footerLinks: rawFooterLinks,
        publishedDate,
        ...layoutProps
    } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const { frontmatter: author } = authorPage || {};
    const formattedPublishedDate = moment(publishedDate).format('Do MMMM YYYY');
    const pageProps = {
        introduction,
        author,
        formattedPublishedDate,
        components,
    };

    return (
        <Layout
            {...{
                ...layoutProps,
            }}
            introduction={introduction}
            footerLinks={footerLinks}
        >
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
