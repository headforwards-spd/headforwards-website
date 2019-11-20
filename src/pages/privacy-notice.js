import {graphql, useStaticQuery} from 'gatsby';
import React                     from 'react';
import Layout                    from '../components/page-layout/layout';
import PrivacyNoticeTemplate     from '../components/page-templates/priacy-notice/privacy-notice.template';

export default PrivacyNotice;

function PrivacyNotice() {
    const props = {
        title: 'Privacy Notice.',
    };

    const { privacyData } = useStaticQuery(graphql`
        query {
            privacyData: dataYaml(title: { eq: "privacy-notice" }) {
                introduction
                personalDataTitle
                personalData
                howDoWeCollectTitle
                howDoWeCollect
                howLongTitle
                howLong
                regFormsTitle
                regForms
                potentialCustomerDataTitle
                potentialCustomerData
                marketingDataTitle
                marketingData
            }
        }
    `);

    return (
        <Layout {...props}>
            <PrivacyNoticeTemplate {...{ privacyData }} />
        </Layout>
    );
}
