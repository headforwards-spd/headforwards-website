import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
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
};

InfoPageTemplate.defaultProps = {
    introduction: null,
    components: null,
    jobs: null,
};

function InfoPageTemplate({ introduction, components = [], jobs }) {
    const { show, text } = introduction;
    const hasJobs = !!(jobs && jobs.length);

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
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
