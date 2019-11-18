import { string }    from 'prop-types';
import React         from 'react';
import ReactMarkdown from 'react-markdown';
import styles        from './recruitee-offer.module.scss';
import Link          from '../../page-layout/link/link.component';

export default RecruiteeOfferTemplate;

RecruiteeOfferTemplate.propTypes = {
    description: string.isRequired,
    requirements: string.isRequired,
    careers_apply_url: string.isRequired,
    tags: string.isRequired,
    position: string.isRequired,
    education_code: string.isRequired,
    experience_code: string.isRequired,
    employment_type_code: string.isRequired,
    category_code: string.isRequired,
    department: string.isRequired,
    created: string.isRequired,
};

function RecruiteeOfferTemplate({
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
}) {
    return (
        <>
            <dl className={styles.dataTable}>
                <dt>Tags</dt>
                <dd>{tags && tags.join(', ')}</dd>
                <dt>Position</dt>
                <dd>{position}</dd>
                <dt>Education</dt>
                <dd>{education}</dd>
                <dt>Experience</dt>
                <dd>{experience}</dd>
                <dt>Employment Type</dt>
                <dd>{employmentType}</dd>
                <dt>Category</dt>
                <dd>{category}</dd>
                <dt>Department</dt>
                <dd>{department}</dd>
                <dt>Created</dt>
                <dd>{created}</dd>
            </dl>
            <section className={styles.copy}>
                <h1>Description</h1>
                {!!description && <ReactMarkdown source={description} />}
            </section>
            <section className={styles.copy}>
                <h1>Requirements</h1>
                {!!requirements && <ReactMarkdown source={requirements} />}

                <Link to={applyUrl} className={styles.apply}>
                    Apply
                </Link>
            </section>
        </>
    );
}
