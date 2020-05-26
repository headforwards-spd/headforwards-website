import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const HeaderFragment = graphql`
    fragment HeaderFragment on MarkdownRemarkFrontmatter {
        bannerImage {
            ...BannerImageFragment
        }
        title
        subtitle
        introduction
        summary {
            text
            seoImage: image {
                ...SeoImageFragment
            }
        }
    }
`;
