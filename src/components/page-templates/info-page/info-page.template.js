import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import Link from '../../page-layout/link/link.component';
import JobSummaryComponent from '../jobs-page/job-summary.component';
import styles from './info-page.module.scss';

export default InfoPageTemplate;

InfoPageTemplate.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }),
    components: arrayOf(PageComponentPropType),
    jobs: arrayOf(any),
    careers: shape({
        applicationForm: string,
    }),
};

InfoPageTemplate.defaultProps = {
    introduction: null,
    components: null,
    jobs: null,
    careers: null,
};

function InfoPageTemplate({ introduction, components = [], jobs, careers }) {
    const { show, text } = introduction;
    const hasJobs = !!(jobs && jobs.length);
    const { applicationForm } = careers || {};
    const hasApplicationForm = !!applicationForm;

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
            {hasApplicationForm && (
                <Link to={`/careers/${applicationForm}/application-form/`} className={styles.apply}>
                    Apply Online
                </Link>
            )}
            {hasJobs && (
                <section>
                    <h2>Current job availability</h2>
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
