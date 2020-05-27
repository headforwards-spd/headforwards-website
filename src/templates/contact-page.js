import { graphql } from 'gatsby';
import React from 'react';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import ContactTemplate from '../components/page-templates/contact/contact.template';

export default ContactPage;

function ContactPage({ data }) {
    const { page, companyInfo } = data;
    const { frontmatter } = page;

    const layoutProps = extractLayoutProps(page);
    const { introduction, components } = frontmatter;
    const pageProps = {
        introduction,
        ...companyInfo,
        components,
    };

    return (
        <Layout {...layoutProps}>
            <ContactTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query ContactPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
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
`;
