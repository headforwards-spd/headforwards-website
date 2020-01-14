import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import HomepageTemplate from '../components/page-templates/homepage/homepage.template';
import Layout from '../components/page-layout/layout';

const homepagePropTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
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

export default Homepage;

Homepage.propTypes = homepagePropTypes;

function Homepage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { introduction, sections, ...layoutProps } = frontmatter;
    const templateProps = { introduction, sections };

    return (
        <Layout {...layoutProps} isHomePage>
            <HomepageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query HomePage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                subtitle
                introduction
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 900, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sections {
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imagePostit: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    isPostit
                    title
                    isRightImage
                    components {
                        type
                        quote
                        profilePic {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 100, maxHeight: 100, cropFocus: CENTER, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        name
                        jobTitle
                        text
                        title
                    }
                }
            }
        }
    }
`;
