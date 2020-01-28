import { graphql } from 'gatsby';
import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { extractFooterLinks } from '../components/page-layout/footer/footer-link.component';
import Layout from '../components/page-layout/layout';
import JobsPageTemplate from '../components/page-templates/jobs-page/jobs-page.template';

export default JobsPage;

JobsPage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape({
                    show: bool.isRequired,
                    text: string.isRequired,
                }),
                components: arrayOf(PageComponentPropType),
            }),
        }),
        jobs: {
            nodes: arrayOf(
                shape({
                    id: string,
                    title: string,
                    path: string,
                    created: string,
                })
            ),
        },
    }).isRequired,
};

function JobsPage({ data }) {
    const { page, jobNodes } = data;
    const { frontmatter } = page;
    const { introduction, components, footerLinks: rawFooterLinks, ...layoutProps } = frontmatter;
    const footerLinks = extractFooterLinks(rawFooterLinks);
    const { nodes: jobs } = jobNodes;
    const pageProps = {
        introduction,
        jobs,
        components,
    };

    return (
        <Layout {...layoutProps} footerLinks={footerLinks}>
            <JobsPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query JobsPage($id: String!) {
        jobNodes: allRecruiteeOffer(sort: { fields: position, order: DESC }) {
            nodes {
                id
                title
                salary
                path
                created(fromNow: true)
            }
        }
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
    }
`;
