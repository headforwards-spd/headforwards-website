import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const FooterLinkFragment = graphql`
    fragment FooterLinkFragment on MarkdownRemark {
        id
        frontmatter {
            title
            introduction {
                text
            }
            image {
                image {
                    ...ImageFragment
                }
            }
        }
    }
`;
