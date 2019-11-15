import { string } from 'prop-types';
import React from 'react';
import Link from '../../link/link.component';
import styles from './careers.module.scss';

export default JobSummary;

JobSummary.propTypes = {
    slug: string.isRequired,
    title: string.isRequired,
    created: string.isRequired,
};
function JobSummary({ slug, title, created }) {
    return (
        <Link to={`/careers/${slug}`} className={styles.job}>
            {title} <span>(posted {created})</span>
        </Link>
    );
}
