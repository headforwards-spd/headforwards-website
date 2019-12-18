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
                introduction: shape({
                    title: string,
                    text: string,
                }),
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

    return (
        <Layout {...layoutProps}>
            <LegalPageTemplate {...{ introduction, sections }} />
        </Layout>
    );
}

export const query = graphql`
    query LegalPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                introduction {
                    title
                    text
                }
                callToAction
                seo {
                    title
                    description
                }
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 900, cropFocus: ENTROPY, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 1440, cropFocus: ENTROPY, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sections {
                    title
                    text
                }
            }
        }
    }
`;
