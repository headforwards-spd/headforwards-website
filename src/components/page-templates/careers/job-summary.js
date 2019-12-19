import { string } from 'prop-types';
import React from 'react';
import Link from '../../page-layout/link/link.component';
import styles from './careers.module.scss';

export default JobSummary;

JobSummary.propTypes = {
    path: string.isRequired,
    title: string.isRequired,
    created: string.isRequired,
};
function JobSummary({ path, title, created }) {
    return (
        <Link to={`/careers/jobs/${path}`} className={styles.job}>
            {title} <span>(posted {created})</span>
        </Link>
    );
}
