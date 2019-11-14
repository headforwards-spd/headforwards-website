import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from '../components/link/link.component';
import Layout from '../components/page-layout/layout';
import styles from './recruitee-offer.module.scss';

export default RecruiteeOfferPage;

RecruiteeOfferPage.propTypes = {
    data: shape({
        job: shape({
            description: string,
            requirements: string,
            careers_apply_url: string,
            tags: string,
            position: string,
            education_code: string,
            experience_code: string,
            employment_type_code: string,
            category_code: string,
            department: string,
            created: string,
        }),
    }).isRequired,
};

export const query = graphql`
    query RecruiteeOfferPage($id: String!) {
        job: recruiteeOffer(id: { eq: $id }) {
            title
            description
            requirements
            careers_apply_url
            tags
            position
            education_code
            experience_code
            employment_type_code
            category_code
            department
            created
        }
    }
`;

function RecruiteeOfferPage({ data }) {
    const { job } = data;
    const {
        title,
        description,
        requirements,
        careers_apply_url: applyUrl,
        tags,
        position,
        education_code: education,
        experience_code: experience,
        employment_type_code: employmentType,
        category_code: category,
        department,
        created,
    } = job;

    const headerProps = {
        title,
    };

    return (
        <Layout {...headerProps}>
            <dl className={styles.dataTable}>
                <dt>Tags</dt>
                <dd>{tags && tags.join(', ')}</dd>
                <dt>position</dt>
                <dd>{position}</dd>
                <dt>education</dt>
                <dd>{education}</dd>
                <dt>experience</dt>
                <dd>{experience}</dd>
                <dt>employmentType</dt>
                <dd>{employmentType}</dd>
                <dt>category</dt>
                <dd>{category}</dd>
                <dt>department</dt>
                <dd>{department}</dd>
                <dt>created</dt>
                <dd>{created}</dd>
            </dl>
            <section className={styles.copy}>
                <h1>Description</h1>
                {!!description && <ReactMarkdown source={description} />}
            </section>
            <section className={styles.copy}>
                <h1>Requirements</h1>
                {!!requirements && <ReactMarkdown source={requirements} />}

                <Link to={applyUrl}>Apply &rarr;</Link>
            </section>
        </Layout>
    );
}
