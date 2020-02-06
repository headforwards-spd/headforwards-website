import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/page-layout/layout';
import ContactTemplate from '../components/page-templates/contact/contact.template';

export default Contact;

function Contact() {
    const props = {
        title: 'Contact us.',
    };

    const { companyInfo } = useStaticQuery(graphql`
        query {
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                companyName
                email
                jobsEmail
                phone
                address
                registeredAddress
                mapUrl
            }
        }
    `);

    return (
        <Layout {...props}>
            <ContactTemplate {...companyInfo} />
        </Layout>
    );
}
