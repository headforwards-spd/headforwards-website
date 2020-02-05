import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const PageFragment = graphql`
    fragment PageFragment on MarkdownRemark {
        frontmatter {
            title
            subtitle
            isPostits
            image {
                show
                image {
                    publicURL
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 1440, maxHeight: 900, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                seoImage: image {
                    childImageSharp {
                        fixed(width: 1200, height: 630, cropFocus: CENTER) {
                            src
                            width
                            height
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
                            fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
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
                            fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 592, cropFocus: CENTER) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    imageSquare: image {
                        publicURL
                        childImageSharp {
                            fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                image {
                    publicURL
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 592, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageSquare: image {
                    publicURL
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imagePostit: image {
                    publicURL
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                flip
                imageOne {
                    publicURL
                    name
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 592, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageOneSquare: image {
                    publicURL
                    name
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageTwo {
                    publicURL
                    name
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 592, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageTwoSquare: image {
                    publicURL
                    name
                    childImageSharp {
                        fluid(maxWidth: 100, maxHeight: 100, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                profilePic {
                    publicURL
                    childImageSharp {
                        fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 714, maxHeight: 714, cropFocus: CENTER) {
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
                    frontmatter {
                        title
                        introduction {
                            text
                        }
                        image {
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 512, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
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
                                childImageSharp {
                                    fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 512, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
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
                                childImageSharp {
                                    fluid(srcSetBreakpoints: [ 288, 714, 947, 1170, 1440 ], maxWidth: 947, maxHeight: 512, cropFocus: CENTER, quality: 85) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
            footerText
            callToAction
            seo {
                title
                description
            }
        }
    }
`;
