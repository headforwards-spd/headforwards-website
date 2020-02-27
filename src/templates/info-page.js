import { graphql } from 'gatsby';
import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import InfoPageTemplate from '../components/page-templates/info-page/info-page.template';

export default InfoPagePage;

InfoPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape({
                    show: bool.isRequired,
                    text: string.isRequired,
                }),
                components: arrayOf(PageComponentPropType),
                careers: shape({
                    title: string,
                    department: string,
                    applicationForm: string,
                }),
            }),
        }),
    }).isRequired,
};

function InfoPagePage({ data }) {
    const { page, careers: careersSettings, jobs: jobNodes } = data;
    const { frontmatter } = page;
    const { introduction, components, careers, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const { jobsTitle } = careersSettings;
    const { nodes: jobs } = jobNodes;
    const pageProps = {
        introduction,
        components,
        jobsTitle,
        jobs,
        careers,
    };

    const { applicationForm } = careers || {};
    const jobDetails = applicationForm
        ? {
              path: `/careers/${applicationForm}`,
              tags: [],
          }
        : null;

    return (
        <Layout
            {...{
                ...layoutProps,
                jobDetails,
            }}
            introduction={introduction}
            footerLinks={footerLinks}
        >
            <InfoPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query InfoPage($id: String!, $department: String!, $tagRegex: String!) {
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
        careers: dataYaml(title: { eq: "careers" }) {
            jobsTitle
        }
        jobs: allRecruiteeOffer(filter: { department: { eq: $department }, tags: { regex: $tagRegex } }) {
            nodes {
                title
                salary
                path
            }
        }
    }
`;
