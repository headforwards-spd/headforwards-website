import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PageFragment = graphql`
    fragment PageFragment on MarkdownRemark {
        frontmatter {
            isPostits
            ...HeaderFragment
            author {
                id
                frontmatter {
                    name
                    bio
                    jobTitle
                    profilePic {
                        ...ProfilePicFragment
                    }
                }
            }
            publishedDate
            components {
                id
                type
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
                quote
                name
                jobTitle
                isPostit
                isRightImage
                isTwoColumns
                link {
                    link
                    linkText
                }
                articles {
                    id
                    title
                    text
                    linkText
                    link
                    image {
                        ...ImageFragment
                    }
                    imageSquare: image {
                        ...ImageSquareFragment
                    }
                }
                ...SectionImageFragment
                flip
                imageOne {
                    ...ImageFragment
                }
                imageOneSquare: image {
                    ...ImageSquareFragment
                }
                imageTwo {
                    ...ImageFragment
                }
                imageTwoSquare: image {
                    ...ImageSquareFragment
                }
                profilePic {
                    ...ProfilePicFragment
                }
            }
            footerLinks {
                showImages
                title
                link1
                link2
                link3
                page1 {
                    ...FooterLinkFragment
                }
                page2 {
                    ...FooterLinkFragment
                }
                page3 {
                    ...FooterLinkFragment
                }
            }
            footerText
            callToAction
            careers {
                title
                department
                applicationForm
            }
            seo {
                title
                description
            }
        }
    }
`;
