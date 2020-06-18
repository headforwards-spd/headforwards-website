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
            ...ImagePostitFragment
        }
    }
`;
