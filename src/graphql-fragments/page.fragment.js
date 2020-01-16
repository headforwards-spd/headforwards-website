import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PageFragment = graphql`
    fragment PageFragment on MarkdownRemark {
        frontmatter {
            title
            subtitle
            image {
                show
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1440, maxHeight: 900, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            introduction {
                show
                text
            }
            components {
                id
                type
                title
                content {
                    type
                    text
                    quote
                    name
                    jobTitle
                    profilePic {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
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
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imagePostit: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                flip
                imageOne {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageOneSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageTwo {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1024, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageTwoSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 100, maxHeight: 100, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                profilePic {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 640, maxHeight: 640, cropFocus: CENTER, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            footerLinks {
                link1
                link2
                link3
                page1 {
                    frontmatter {
                        title
                        introduction {
                            text
                        }
                        image {
                            image {
                                publicURL
                            }
                        }
                    }
                }
                page2 {
                    frontmatter {
                        title
                        introduction {
                            text
                        }
                        image {
                            image {
                                publicURL
                            }
                        }
                    }
                }
                page3 {
                    frontmatter {
                        title
                        introduction {
                            text
                        }
                        image {
                            image {
                                publicURL
                            }
                        }
                    }
                }
            }
            callToAction
            seo {
                title
                description
            }
        }
    }
`;
