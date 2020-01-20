import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import JobPageTemplate from '../components/page-templates/job-page/job-page.templete';

export default JobPage;

JobPage.propTypes = {
    data: shape({
        job: shape({
            description: string,
            requirements: string,
            careers_apply_url: string,
            tags: string,
            position: string,
            education_code: string,
            experience_code: string,
            employment_type_code: string,
            category_code: string,
            department: string,
            created: string,
        }),
    }).isRequired,
};

export const query = graphql`
    query JobPage($id: String!) {
        job: recruiteeOffer(id: { eq: $id }) {
            title
            subtitle
            salary
            description
            requirements
            careers_apply_url
            tags
            position
            education_code
            experience_code
            employment_type_code
            category_code
            department
            created(fromNow: true)
        }
    }
`;

function JobPage({ data }) {
    const { job } = data;
    const { title, subtitle, ...props } = job;

    const headerProps = {
        title,
        subtitle,
    };

    return (
        <Layout {...headerProps}>
            <JobPageTemplate {...props} />
        </Layout>
    );
}
