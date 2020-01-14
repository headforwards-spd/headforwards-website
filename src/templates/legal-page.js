import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
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
    const { introduction, sections, ...layoutProps } = frontmatter;
    const templateProps = { introduction, sections };

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
                title
                subtitle
                introduction
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
