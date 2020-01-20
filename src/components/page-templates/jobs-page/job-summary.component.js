import { shape, string } from 'prop-types';
import React from 'react';
import Link from '../../page-layout/link/link.component';
import styles from './jobs-page.module.scss';

const jobSummaryPropTypes = {
    path: string.isRequired,
    title: string.isRequired,
    salary: string,
};

export default JobSummaryComponent;
export const JobsSummaryComponentPropType = shape(jobSummaryPropTypes);
JobSummaryComponent.propTypes = jobSummaryPropTypes;
JobSummaryComponent.defaultProps = {
    salary: null,
};

function JobSummaryComponent({ path, title, salary }) {
    return (
        <Link to={`/careers/jobs/${path}`} className={styles.job}>
            <section>
                <h2>{title}</h2>
                {salary && <p>{salary}</p>}
            </section>
            <button type="button">More details</button>
        </Link>
    );
}
