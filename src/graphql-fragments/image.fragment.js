import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ImageFragment = graphql`
    fragment ImageFragment on File {
        publicURL
        childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 85) {
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
