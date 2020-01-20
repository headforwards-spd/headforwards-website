import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './job-page.module.scss';
import Link from '../../page-layout/link/link.component';

export default JobPageTemplate;

JobPageTemplate.propTypes = {
    description: string.isRequired,
    requirements: string.isRequired,
    careers_apply_url: string.isRequired,
};

function JobPageTemplate({ description, requirements, careers_apply_url: applyUrl }) {
    return (
        <>
            <section className={styles.jobDetails}>
                {!!description && (
                    <section>
                        <h2>Job description</h2>
                        <ReactMarkdown source={description} />
                    </section>
                )}
                {!!requirements && (
                    <section>
                        <h2>Requirements</h2>
                        <ReactMarkdown source={requirements} />
                    </section>
                )}
            </section>
            <Link to={applyUrl} className={styles.apply}>
                Apply
            </Link>
        </>
    );
}
