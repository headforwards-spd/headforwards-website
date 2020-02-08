import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const BannerImageFragment = graphql`
    fragment BannerImageFragment on MarkdownRemarkFrontmatter {
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
            seoImage: image {
                childImageSharp {
                    fixed(width: 1200, height: 630, cropFocus: CENTER, quality: 85) {
                        src
                        width
                        height
                    }
                }
            }
        }
    }
`;
