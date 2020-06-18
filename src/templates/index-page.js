import { graphql } from 'gatsby';
import { any, arrayOf, bool, shape } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import IndexPageTemplate from '../components/page-templates/index-page/index-page.template';

export default IndexPage;

IndexPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                isPostits: bool,
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
    pageContext: shape({
        children: arrayOf(any),
    }).isRequired,
};

function IndexPage({ data, pageContext }) {
    const { page } = data || {};
    const { frontmatter } = page || {};

    const layoutProps = extractLayoutProps(page);

    const { isPostits, introduction, components } = frontmatter || {};
    const { children: pages } = pageContext || {};
    const templateProps = {
        isPostits,
        introduction,
        pages,
        components,
    };

    return (
        <Layout {...layoutProps}>
            <IndexPageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query IndexPage($uuid: String!) {
        page: markdownRemark(frontmatter: { uuid: { eq: $uuid } }) {
            frontmatter {
                ...PageFragment
            }
        }
    }
`;
