import { graphql } from 'gatsby';
import React from 'react';
import { objectOf, shape, string, any, arrayOf, oneOfType } from 'prop-types';
import Layout from '../../components/page-layout/layout';
import { ArticleColumnsPropType } from '../../components/page-components/columns/article-columns/article-columns.component';
import { ImageCopyColumnsPropType } from '../../components/page-components/columns/image-copy-columns/image-copy-columns.component';
import { PostitCopyColumnsPropType } from '../../components/page-components/columns/postit-copy-columns/postit-copy-columns.component';
import { HeroPropType } from '../../components/page-components/hero/hero.component';
import { ContentSliderPropType } from '../../components/page-components/content-slider/content-slider.component';
import { BlogPostColumnsPropType } from '../../components/page-components/columns/blog-post-columns/blog-post-columns.component';
import { FullWidthImageSrcPropType } from '../../components/page-components/images/full-width/full-width-image.component';
import { TwoImagesPropType } from '../../components/page-components/images/two/two-images.component';
import { QuotePropType } from '../../components/page-components/quote/quote.component';
import DesignPageTemplate from '../../components/page-templates/design-page/design-page.template';

export default DesignPage;

DesignPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                title: string.isRequired,
                text: string,
                image: shape({
                    publicURL: string,
                    childImageSharp: shape({
                        fluid: objectOf(any),
                    }),
                }),
                components: arrayOf(
                    oneOfType([
                        ArticleColumnsPropType,
                        ImageCopyColumnsPropType,
                        PostitCopyColumnsPropType,
                        HeroPropType,
                        ContentSliderPropType,
                        BlogPostColumnsPropType,
                        FullWidthImageSrcPropType,
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
                text
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 900, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 1440, cropFocus: ENTROPY) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                components {
                    type
                    title
                    text
                    quote
                    name
                    jobTitle
                    isRightImage
                    isTwoColumns
                    link
                    linkText
                    articles {
                        title
                        text
                        linkText
                        link
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
                }
            }
        }
    }
`;

function DesignPage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { components, ...header } = frontmatter;
    const pageProps = { components };
    return (
        <Layout {...header}>
            <DesignPageTemplate {...pageProps} />
        </Layout>
    );
}
