import { shape, string } from 'prop-types';
import React from 'react';
import Link from '../../page-layout/link/link.component';
import styles from './jobs-page.module.scss';

const jobSummaryPropTypes = {
    path: string.isRequired,
    title: string.isRequired,
    created: string.isRequired,
};

export default JobSummaryComponent;
export const JobsSummaryComponentPropType = shape(jobSummaryPropTypes);
JobSummaryComponent.propTypes = jobSummaryPropTypes;

function JobSummaryComponent({ path, title, created }) {
    return (
        <Link to={`/careers/jobs/${path}`} className={styles.job}>
            {title} <span>(posted {created})</span>
        </Link>
    );
}
