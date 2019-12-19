import { graphql } from 'gatsby';
import React from 'react';
import { objectOf, shape, string, any, arrayOf, oneOfType } from 'prop-types';
import Layout from '../components/page-layout/layout';
import { ArticleColumnsPropType } from '../components/page-components/columns/article-columns/article-columns.component';
import { ImageCopyColumnsPropType } from '../components/page-components/columns/image-copy-columns/image-copy-columns.component';
import { PostitCopyColumnsPropType } from '../components/page-components/columns/image-copy-columns/postit-copy-columns.component';
import { HeroPropType } from '../components/page-components/hero/hero.component';
import { ContentSliderPropType } from '../components/page-components/content-slider/content-slider.component';
import { BlogPostColumnsPropType } from '../components/page-components/columns/blog-post-columns/blog-post-columns.component';
import { FullWidthImageSrcPropType } from '../components/page-components/images/full-width/full-width-image.component';
import { TwoImagesPropType } from '../components/page-components/images/two/two-images.component';
import { QuotePropType } from '../components/page-components/quote/quote.component';
import InfoPageTemplate from '../components/page-templates/info-page/info-page.template';

export default InfoPagePage;

InfoPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                title: string.isRequired,
                text: string,
                introduction: shape({
                    title: string,
                    text: string.isRequired,
                }),
                callToAction: string,
                seo: {
                    slug: string,
                    // title: string,
                    // description: string,
                },
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
    query InfoPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                text
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
                components {
                    id
                    type
                    title
                    text
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
                                fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        imageSquare: image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imagePostit: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                    imageOne {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageOneSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageTwo {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageTwoSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 100, maxHeight: 100, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    profilePic {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: ENTROPY, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`;

function InfoPagePage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { introduction, components, ...header } = frontmatter;
    const pageProps = { introduction, components };

    return (
        <Layout {...header}>
            <InfoPageTemplate {...pageProps} />
        </Layout>
    );
}
