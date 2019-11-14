import { graphql } from 'gatsby';
import React from 'react';
import HomepageTemplate from '../components/page-layout/homepage/homepage.component';
import Layout from '../components/page-layout/layout';

const homepagePropTypes = {
    data: [],
};

export default Homepage;

Homepage.propTypes = homepagePropTypes;
Homepage.defaultProps = {
    data: [],
};

function Homepage({ data }) {
    const props = {
        title: 'Forward Thinking Software',
        image: '/uploads/curlyhair.png',
    };
    return (
        <Layout {...props}>
            <HomepageTemplate {...data} />
        </Layout>
    );
}

export const query = graphql`
    query HomePageQuery {
        page: dataJson {
            sections {
                image
                postit
                title
                isRightImage
                components {
                    type
                    quote
                    profilePic
                    name
                    jobTitle
                    text
                    title
                }
            }
        }
    }
`;
