import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import Link from '../../page-layout/link/link.component';
import styles from './jobs-page.module.scss';

export default JobsPageTemplate;

const jobRolePropTypes = {
    title: string.isRequired,
    link: string.isRequired,
    page: shape({
        frontmatter: shape({
            introduction: shape({
                text: string,
            }),
        }),
    }).isRequired,
};
const jobsPageTemplatePropTypes = {
    introduction: shape({
        title: string,
        text: string.isRequired,
    }),
    jobRoles: arrayOf(shape(jobRolePropTypes)),
    components: arrayOf(PageComponentPropType),
};

JobsPageTemplate.propTypes = jobsPageTemplatePropTypes;

JobsPageTemplate.defaultProps = {
    introduction: null,
    jobRoles: null,
    components: null,
};

function JobsPageTemplate({ introduction, jobRoles, components = [] }) {
    return (
        <>
            <IntroductionComponent {...introduction} />
            {jobRoles && (
                <section className={styles.jobRoles}>
                    {jobRoles.map(jobRole => (
                        <JobRole {...jobRole} />
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

JobRole.propTypes = jobRolePropTypes;

function JobRole({ title, link, page }) {
    const { frontmatter } = page || {};
    const { introduction } = frontmatter || {};
    const [{ text } = {}] = introduction || [];

    return (
        <Postit className={styles.role}>
            <Link to={link}>
                <h2>{title}</h2>
                <ReactMarkdown source={text} />
                <Link to={link} className={styles.link}>
                    Read more
                </Link>
            </Link>
        </Postit>
    );
}
