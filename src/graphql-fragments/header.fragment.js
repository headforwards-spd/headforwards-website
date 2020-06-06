import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const HeaderFragment = graphql`
    fragment HeaderFragment on MarkdownRemarkFrontmatter {
        ...BannerImageFragment
        title
        subtitle
        introduction {
            title
            content {
                id
                type
                text
                quote
                name
                jobTitle
                profilePic {
                    ...ProfilePicFragment
                }
            }
        }
        summary {
            text
            seoImage: image {
                ...SeoImageFragment
            }
        }
    }
`;
