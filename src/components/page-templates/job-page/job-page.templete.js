import { string } from 'prop-types';
import React from 'react';

import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './job-page.module.scss';

export default JobPage;

JobPage.propTypes = {
    path: string.isRequired,
    description: string.isRequired,
    requirements: string.isRequired,
};

function JobPage({ path, description, requirements }) {
    return (
        <>
            <h2>Job description</h2>
            <section className={styles.jobDetails}>
                {!!description && <Markdown source={description} />}
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
