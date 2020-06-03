import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const FooterLinkFragment = graphql`
    fragment FooterLinkFragment on MarkdownRemark {
        id
        fields {
            slug
        }
        frontmatter {
            parent
            title
            summary {
                image {
                    ...FooterImageFragment
                }
                text
            }
        }
    }
`;
