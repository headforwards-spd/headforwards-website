import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/page-layout/layout';
import PrivacyNoticeTemplate from '../components/page-templates/privacy-notice/privacy-notice.template';

export default PrivacyNotice;

function PrivacyNotice() {
    const props = {
        title: 'Privacy Notice.',
    };

    const { privacyData } = useStaticQuery(graphql`
        query {
            privacyData: dataYaml(title: { eq: "privacy-notice" }) {
                introduction
                sections {
                    text
                    title
                }
            }
        }
    `);
    console.log(privacyData);


    return (
        <Layout {...props}>
            <PrivacyNoticeTemplate {...{ privacyData }} />
        </Layout>
    );
}
