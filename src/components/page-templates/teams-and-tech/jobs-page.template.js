import React from 'react';
import { arrayOf, string } from 'prop-types';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import PostitPageLink, { PostitPageLinkPropType } from '../index-page/postit-page-link.component';
import styles from './jobs-page.module.scss';

export default JobsPageTemplate;

const jobsPageTemplatePropTypes = {
    introduction: string,
    jobRoles: arrayOf(PostitPageLinkPropType),
    components: arrayOf(PageComponentPropType),
};

JobsPageTemplate.propTypes = jobsPageTemplatePropTypes;

JobsPageTemplate.defaultProps = {
    introduction: null,
    jobRoles: null,
    components: null,
};

function JobsPageTemplate({ introduction, jobRoles, components = [] }) {
    const { show, text } = introduction;

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            {jobRoles && (
                <section className={styles.jobRoles}>
                    {jobRoles.map(jobRole => (
                        <PostitPageLink {...jobRole} />
                    ))}
                </section>
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
