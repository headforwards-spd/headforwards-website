import { graphql } from 'gatsby';
import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';
import { PageComponentPropType } from '../components/page-components/page-component';
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

// CareersPage.propTypes = {
//     data: shape({
//         n
//     }).isRequired,
// };

function JobsPage({ data }) {
    const { page, jobNodes } = data;
    const { frontmatter } = page;
    const { introduction, components, ...header } = frontmatter;
    const { nodes: jobs } = jobNodes;
    const pageProps = {
        introduction,
        jobs,
        components,
    };

    return (
        <Layout {...header}>
            <JobsPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query JobsPage($id: String!) {
        jobNodes: allRecruiteeOffer(sort: { fields: created, order: DESC }) {
            nodes {
                id
                title
                path
                created(fromNow: true)
            }
        }
        page: markdownRemark(id: { eq: $id }) {
            ...PageFragment
        }
    }
`;
