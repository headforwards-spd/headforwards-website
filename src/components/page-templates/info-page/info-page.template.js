import { any, arrayOf, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Introduction, { IntroductionProps } from '../../page-layout/introduction/introduction.component';
import Link from '../../page-layout/link/link.component';
import JobSummaryComponent from '../jobs-page/job-summary.component';
import styles from './info-page.module.scss';

export default InfoPage;

InfoPage.propTypes = {
    introduction: shape(IntroductionProps),
    components: arrayOf(PageComponentPropType),
    jobsTitle: string,
    jobs: arrayOf(any),
    careers: shape({
        title: string,
        applicationForm: string,
    }),
};

InfoPage.defaultProps = {
    introduction: null,
    components: null,
    jobsTitle: null,
    jobs: null,
    careers: null,
};

function InfoPage({ introduction, components = [], jobsTitle: defaultJobsTitle, jobs, careers }) {
    const hasJobs = !!(jobs && jobs.length);
    const { title: jobsTitle, applicationForm } = careers || {};
    const hasApplicationForm = !!applicationForm;

    const isIntro = !introduction;

    return (
        <>
            {introduction && <Introduction introduction={introduction} className={styles.introduction} />}
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => (
                            <PageComponent key={id} {...component} isIntro={isIntro} />
                        ))}
                </section>
            )}
            {hasApplicationForm && (
                <Link to={`/careers/${applicationForm}/application-form/`} className={styles.apply}>
                    Apply Online
                </Link>
            )}
            {hasJobs && (
                <section>
                    <h2>{jobsTitle || defaultJobsTitle}</h2>
                    <ul className={styles.jobsList}>
                        {jobs.map(job => (
                            <li key={job.path}>
                                <JobSummaryComponent {...job} />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
