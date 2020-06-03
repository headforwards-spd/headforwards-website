import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import LegalPageTemplate from '../components/page-templates/legal-page/legal-page.template';

export default LegalPage;
LegalPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                title: string.isRequired,
                subtitle: string,
                introduction: string,
                sections: arrayOf(
                    shape({
                        title: string,
                        text: string.isRequired,
                    })
                ),
            }),
        }),
    }).isRequired,
};

function LegalPage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { introduction, sections, components } = frontmatter || {};

    const layoutProps = extractLayoutProps(page);
    const templateProps = {
        introduction,
        sections,
        components,
    };

    return (
        <Layout {...layoutProps}>
            <LegalPageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query LegalPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                ...HeaderFragment
                sections {
                    title
                    text
                }
                callToAction
                seo {
                    title
                    description
                }
            }
        }
    }
`;
