import {graphql}          from 'gatsby';
import React              from 'react';
import Layout             from '../../components/layout/Layout';
import DesignPageTemplate from '../../components/page-templates/design-page/design-page.template';

export default DesignPage;
export const query = graphql`
    query PostPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                navbar {
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    paragraph
                }
                components {
                    title
                    text
                    jobTitle
                    name
                    isRightImage
                    quote
                    isTwoColumns
                    type
                    link
                    linkText
                    slides {
                        title
                        text
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        imageSquare: image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    articles {
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        imageSquare: image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        title
                        text
                        linkText
                        link
                    }
            
                    rightImage {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    rightImageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    profilePic {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    leftImage {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    leftImageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

function DesignPage({data}) {
    const {page}                      = data;
    const {frontmatter}               = page;
    const {components, title, navbar} = frontmatter;
    const {paragraph, image}          = navbar || {};
    const header                      = {
        title,
        paragraph,
        image
    };
    const pageProps                   = {components};
    return (
        <Layout {...{header}}>
            <DesignPageTemplate {...pageProps} />
        </Layout>
    );
}
