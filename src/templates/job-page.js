import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import JobPageTemplate from '../components/page-templates/job-page/job-page.templete';

export default JobPage;

JobPage.propTypes = {
    path: string.isRequired,
    data: shape({
        job: shape({
            title: string.isRequired,
            subtitle: string,
        }),
        filters: shape({
            departments: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
            tags: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
        }).isRequired,
    }).isRequired,
};

function JobPage({ path, data }) {
    const { job, filters } = data;
    const { title, subtitle, introduction, ...templateProps } = job;
    const { salary, tags } = job;

    const page = {
        frontmatter: {
            title,
            subtitle,
            summary: {
                title,
                text: introduction,
            },
            jobDetails: {
                salary,
                tags,
                path,
                filters,
            },
        },
    };

    const layoutProps = extractLayoutProps(page);

    return (
        <Layout {...layoutProps}>
            <JobPageTemplate {...templateProps} introduction={introduction} path={path} />
        </Layout>
    );
}

export const query = graphql`
    query JobPage($id: String!) {
        filters: dataYaml(title: { eq: "careers" }) {
            tags {
                label
                slug
            }
        }
        job: recruiteeOffer(id: { eq: $id }) {
            ...JobFragment
        }
    }
`;
