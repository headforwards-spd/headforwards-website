import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import Link from '../../page-layout/link/link.component';
import styles from './jobs-page.module.scss';

export default JobsPageTemplate;

JobsPageTemplate.propTypes = {
    introduction: shape({
        title: string,
        text: string.isRequired,
    }),
    components: arrayOf(PageComponentPropType),
};

JobsPageTemplate.defaultProps = {
    introduction: null,
    components: null,
};

function JobsPageTemplate({ introduction, jobRoles, components = [] }) {
    return (
        <>
            <IntroductionComponent introduction={introduction} />
            <section className={styles.jobRoles}>
                {jobRoles.map(jobRole => (
                    <JobRole {...jobRole} />
                ))}
            </section>
            {components && (
                <section className={styles.components}>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}

function JobRole({ title, link, page }) {
    const { frontmatter } = page || {};
    const { introduction } = frontmatter || {};
    const [{ text } = {}] = introduction || [];

    return (
        <Postit className={styles.role}>
            <Link to={link}>
                <h1>{title}</h1>
                <ReactMarkdown source={text} />
                <Link to={link} className={styles.link}>
                    Read more
                </Link>
            </Link>
        </Postit>
    );
}
