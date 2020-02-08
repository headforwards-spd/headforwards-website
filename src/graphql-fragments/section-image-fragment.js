import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const SectionImageFragment = graphql`
    fragment SectionImageFragment on MarkdownRemarkFrontmatterComponents {
        image {
            ...ImageFragment
        }
        imageSquare: image {
            ...ImageSquareFragment
        }
        imagePostit: image {
            publicURL
            childImageSharp {
                fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
    }
`;
