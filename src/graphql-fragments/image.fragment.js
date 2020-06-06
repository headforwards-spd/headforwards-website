import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ImageFragment = graphql`
    fragment BannerImageFragment on MarkdownRemarkFrontmatter {
        bannerImageMobile: bannerImage {
            childImageSharp {
                fluid(
                    maxWidth: 768
                    maxHeight: 768
                    cropFocus: CENTER
                    quality: 70
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        bannerImageDesktop: bannerImage {
            childImageSharp {
                fluid(
                    maxWidth: 1440
                    maxHeight: 900
                    cropFocus: CENTER
                    quality: 80
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    fragment SeoImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fixed(width: 1200, height: 630, cropFocus: CENTER, quality: 85) {
                src
                width
                height
            }
        }
    }
    fragment ImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 720
                maxHeight: 450
                cropFocus: CENTER
                quality: 85
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ProfilePicFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 100
                maxHeight: 100
                cropFocus: CENTER
                quality: 85
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment FooterImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 732
                maxHeight: 366
                cropFocus: CENTER
                quality: 85
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ImageSquareFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 585
                maxHeight: 585
                cropFocus: CENTER
                quality: 85
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ImagePostitFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 585
                maxHeight: 585
                cropFocus: CENTER
                quality: 85
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
        }
    }
`;
