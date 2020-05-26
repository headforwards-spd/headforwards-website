import { graphql } from 'gatsby';
import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

export default IndexPage;

IndexPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                isPostits: bool,
                introduction: string,
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
    pageContext: shape({
        children: arrayOf(any),
    }).isRequired,
};

function IndexPage({ data, pageContext }) {
    const { page } = data;
    const { frontmatter } = page;
    const { isPostits, introduction, components, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const { children: pages } = pageContext || {};
    const templateProps = {
        isPostits,
        introduction,
        pages,
        components,
    };

    return (
        <Layout {...layoutProps} introduction={introduction} footerLinks={footerLinks}>
            <IndexPageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query IndexPage($uuid: String!) {
        page: markdownRemark(frontmatter: { uuid: { eq: $uuid } }) {
            ...PageFragment
        }
    }
`;
