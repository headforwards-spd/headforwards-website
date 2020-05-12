import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PageFragment = graphql`
    fragment PageFragment on MarkdownRemark {
        frontmatter {
            title
            subtitle
            author {
                id
                frontmatter {
                    name
                    bio
                    profilePic {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
            isPostits
            ...BannerImageFragment
            introduction {
                show
                text
            }
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
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
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
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 85) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
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
