import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import ContactTemplate, { contactPropTypes } from '../components/page-templates/contact/contact.template';

export default ContactPage;

ContactPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
            }),
        }),
        companyInfo: shape(contactPropTypes),
    }).isRequired,
};

function ContactPage({ data }) {
    const { page, companyInfo } = data;
    const { frontmatter } = page;

    const layoutProps = extractLayoutProps(page);
    const { introduction, components } = frontmatter || {};
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
            frontmatter {
                ...PageFragment
            }
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
