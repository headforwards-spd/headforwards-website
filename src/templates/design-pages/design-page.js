import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { ImagePropType } from '../../components/image/image.component';
import Layout from '../../components/layout/layout';
import { ArticlesPropType } from '../../components/page-components/articles/articles.component';
import { ImageCopyColumnsPropType } from '../../components/page-components/columns/image-copy-columns/image-copy-columns.component';
import { PostitCopyColumnsPropType } from '../../components/page-components/columns/postit-copy-columns/postit-copy-columns.component';
import { HeroPropType } from '../../components/page-components/hero/hero.component';
import { ImageSliderPropType } from '../../components/page-components/image-slider/image-slider.component';
import { BlogImagesPropType } from '../../components/page-components/images/blog/blog-images.component';
import { FullWidthImagePropType } from '../../components/page-components/images/full-width/full-width-image.component';
import { TwoImagesPropType } from '../../components/page-components/images/two/two-images.component';
import { QuotePropType } from '../../components/page-components/quote/quote.component';
import DesignPageTemplate from '../../components/page-templates/design-page/design-page.template';

export default DesignPage;

DesignPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                header: PropTypes.shape({
                    subtitle: PropTypes.string,
                    image: ImagePropType,
                }),
                components: PropTypes.arrayOf(
                    PropTypes.oneOf([
                        ArticlesPropType,
                        ImageCopyColumnsPropType,
                        PostitCopyColumnsPropType,
                        HeroPropType,
                        ImageSliderPropType,
                        BlogImagesPropType,
                        FullWidthImagePropType,
                        TwoImagesPropType,
                        QuotePropType,
                    ])
                ),
            }),
        }),
    }).isRequired,
};

export const query = graphql`
    query PostPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                header {
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

function DesignPage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { components, title, header: pageHeader } = frontmatter;
    const header = {
        title,
        ...pageHeader,
    };
    const pageProps = { components };
    return (
        <Layout {...{ header }}>
            <DesignPageTemplate {...pageProps} />
        </Layout>
    );
}
