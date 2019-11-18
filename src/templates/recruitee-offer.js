import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import RecruiteeOfferTemplate from '../components/page-templates/recruitee-offer/recruitee-offer.templete';

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
            created(fromNow: true)
        }
    }
`;

function RecruiteeOfferPage({ data }) {
    const { job } = data;
    const { title, ...props } = job;

    const headerProps = {
        title,
    };

    return (
        <Layout {...headerProps}>
            <RecruiteeOfferTemplate {...props} />
        </Layout>
    );
}
