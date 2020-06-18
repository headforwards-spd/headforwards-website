import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import InfoPageTemplate from '../components/page-templates/info-page/info-page.template';

export default InfoPagePage;

InfoPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
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
    const { page, careers: careersSettings, jobs: jobNodes } = data || {};
    const { frontmatter } = page || {};

    const layoutProps = extractLayoutProps(page);
    const { introduction, components, careers } = frontmatter || {};

    const { jobsTitle } = careersSettings || {};
    const { nodes: jobs } = jobNodes || {};
    const pageProps = {
        introduction,
        components,
        jobsTitle,
        jobs,
        careers,
    };

    return (
        <Layout {...layoutProps}>
            <InfoPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query InfoPage($id: String!, $department: String!, $tagRegex: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                ...PageFragment
            }
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
