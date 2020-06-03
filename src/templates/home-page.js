import { graphql } from 'gatsby';
import { any, arrayOf, shape, string } from 'prop-types';
import React from 'react';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import HomepageTemplate from '../components/page-templates/homepage/homepage.template';

const homepagePropTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: string,
                sections: arrayOf(any),
            }),
        }),
    }).isRequired,
};

export default Homepage;

Homepage.propTypes = homepagePropTypes;

function Homepage({ data }) {
    const { page } = data;
    const { frontmatter } = page;

    const layoutProps = extractLayoutProps(page);
    const { introduction, sections, components } = frontmatter || {};
    const templateProps = {
        introduction,
        sections,
        components,
    };

    return (
        <Layout {...layoutProps} isHomePage>
            <HomepageTemplate {...templateProps} />
        </Layout>
    );
}

export const query = graphql`
    query HomePage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                ...HeaderFragment
                sections {
                    image {
                        ...ImageFragment
                    }
                    imageSquare: image {
                        ...ImageSquareFragment
                    }
                    imagePostit: image {
                        ...ImagePostitFragment
                    }
                    isPostit
                    title
                    isRightImage
                    components {
                        type
                        title
                        content {
                            type
                            quote
                            profilePic {
                                ...ProfilePicFragment
                            }
                            name
                            jobTitle
                            text
                        }
                    }
                }
            }
        }
    }
`;
