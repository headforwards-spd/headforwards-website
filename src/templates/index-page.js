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
                introduction: shape({
                    show: bool.isRequired,
                    text: string.isRequired,
                }),
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
    const { introduction, components, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const { children: pages } = pageContext || {};
    const templateProps = { introduction, pages, components };

    return (
        <Layout {...layoutProps} footerLinks={footerLinks}>
            <IndexPageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query IndexPage($uuid: String!) {
        page: markdownRemark(frontmatter: { uuid: { eq: $uuid } }) {
            frontmatter {
                title
                subtitle
                image {
                    show
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1440, maxHeight: 900, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                introduction {
                    show
                    text
                }
                callToAction
                seo {
                    title
                    description
                }
                components {
                    id
                    type
                    title
                    content {
                        type
                        text
                        quote
                        name
                        jobTitle
                        profilePic {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    quote
                    name
                    jobTitle
                    isPostit
                    isRightImage
                    isTwoColumns
                    link {
                        link
                        linkText
                    }
                    articles {
                        id
                        title
                        text
                        linkText
                        link
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
                    }
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
                    flip
                    imageOne {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageOneSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageTwo {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageTwoSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 100, maxHeight: 100, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    profilePic {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`;
