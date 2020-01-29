import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import HomepageTemplate from '../components/page-templates/homepage/homepage.template';

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
    const { introduction, sections, components, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const templateProps = { introduction, sections };

    return (
        <Layout {...layoutProps} introduction={introduction} footerLinks={footerLinks} isHomePage>
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
                introduction {
                    show
                    text
                }
                image {
                    show
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1440, maxHeight: 900, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                sections {
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imagePostit: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    isPostit
                    title
                    isRightImage
                    components {
                        type
                        title
                        content {
                            type
                            quote
                            profilePic {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 100, maxHeight: 100, cropFocus: CENTER, quality: 85) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            name
                            jobTitle
                            text
                        }
                    }
                }
            }
        }
    }
`;
