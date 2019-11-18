import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import JobSummary from './job-summary';

export default CareersPageTemplate;

CareersPageTemplate.propTypes = {
    page: shape({
        jobs: arrayOf(
            shape({
                id: string,
                path: string,
                title: string,
                created: string,
            })
        ),
    }).isRequired,
};
function CareersPageTemplate({ page }) {
    const { nodes: jobs } = page;

    return (
        <>
            {jobs.map(({ id: key, ...job }) => (
                <JobSummary key={key} {...job} />
            ))}
        </>
    );
}
