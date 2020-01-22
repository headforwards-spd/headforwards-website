import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import JobPageTemplate from '../components/page-templates/job-page/job-page.templete';

export default JobPage;

JobPage.propTypes = {
    path: string.isRequired,
    data: shape({
        job: shape({
            title: string.isRequired,
            subtitle: string,
        }),
    }).isRequired,
};

function JobPage({ path, data }) {
    const { job } = data;
    const { title, subtitle, ...templateProps } = job;

    const headerProps = {
        title,
        subtitle,
    };

    return (
        <Layout {...headerProps}>
            <JobPageTemplate {...templateProps} path={path} />
        </Layout>
    );
}

export const query = graphql`
    query JobPage($id: String!) {
        job: recruiteeOffer(id: { eq: $id }) {
            ...JobFragment
        }
    }
`;
