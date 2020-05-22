import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ImageFragment = graphql`
    fragment BannerImageFragment on File {
        publicURL
        childImageSharp {
            fluid(maxWidth: 1440, maxHeight: 900, cropFocus: CENTER, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment SeoImageFragment on File {
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
        childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ProfilePicFragment on File {
        publicURL
        childImageSharp {
            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment FooterImageFragment on File {
        publicURL
        childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 512, cropFocus: CENTER, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ImageSquareFragment on File {
        publicURL
        childImageSharp {
            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;
