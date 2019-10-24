import {graphql}          from 'gatsby';
import React              from 'react';
import Layout             from '../../components/Layout';
import DesignPageTemplate from '../../components/pages/design-page/design-page-template';

export default DesignPage;
export const query = graphql`
    query PostPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                navbar {
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    paragraph
                }
                components {
                    title
                    text
                    jobTitle
                    name
                    position
                    quote
                    twoColumns
                    type
                    link
                    linkText
                    imageSlider {
                        text
                        title
                        image {
                            publicURL
                        }
                    }
                    articles {
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        title
                        text
                        link_text
                        link
                    }
                   
                    rightImage {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    profilePic {
                        publicURL
                    }
                    leftImage {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 1024, maxHeight: 640, cropFocus: ENTROPY) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

function DesignPage({data}) {
    const {page}                      = data;
    const {frontmatter}               = page;
    const {components, title, navbar} = frontmatter;
    const {paragraph, image}          = navbar || {};
    const header                      = {
        title,
        paragraph,
        image
    };
    const pageProps                   = {components};
    return (
        <Layout {...{header}}>
            <DesignPageTemplate {...pageProps} />
        </Layout>
    );
}
