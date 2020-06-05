import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PageFragment = graphql`
    fragment PageFragment on MarkdownRemarkFrontmatter {
        isPostits
        ...HeaderFragment
        author {
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
            type
            title
            content {
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
                linkText
                link {
                    fields {
                        link
                    }
                }
            }
            articles {
                title
                text
                linkText
                link {
                    fields {
                        link
                    }
                    frontmatter {
                        title
                        summary {
                            text
                            image {
                                ...ImageFragment
                            }
                            imageSquare: image {
                                ...ImageSquareFragment
                            }
                        }
                    }
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
`;
