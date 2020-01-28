import { string } from 'prop-types';
import React from 'react';

import Markdown from '../../page-components/markdown';
import Link from '../../page-layout/link/link.component';
import styles from './job-page.module.scss';

export default JobPageTemplate;

JobPageTemplate.propTypes = {
    path: string.isRequired,
    description: string.isRequired,
    requirements: string.isRequired,
};

function JobPageTemplate({ path, description, requirements }) {
    return (
        <>
            <section className={styles.jobDetails}>
                {!!description && (
                    <section>
                        <h2>Job description</h2>
                        <Markdown source={description} />
                    </section>
                )}
                {!!requirements && (
                    <section>
                        <h2>Requirements</h2>
                        <Markdown source={requirements} />
                    </section>
                )}
            </section>
            <Link to={`${path}/application-form/`} className={styles.apply}>
                Apply Online
            </Link>
        </>
    );
}
