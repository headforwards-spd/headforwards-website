import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import JobSummaryComponent, { JobsSummaryComponentPropType } from './job-summary.component';
import styles from './jobs-page.module.scss';

export default JobsPageTemplate;

JobsPageTemplate.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }),
    jobs: arrayOf(JobsSummaryComponentPropType),
    components: arrayOf(PageComponentPropType),
};
JobsPageTemplate.defaultProps = {
    introduction: null,
    jobs: null,
    components: null,
};
function JobsPageTemplate({ introduction, jobs, components }) {
    const { show, text } = introduction;

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            {jobs && (
                <ul className={styles.jobsList}>
                    {jobs.map(({ id: key, ...job }) => (
                        <li>
                            <JobSummaryComponent key={key} {...job} />
                        </li>
                    ))}
                </ul>
            )}
            {components && (
                <section className={styles.components}>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
