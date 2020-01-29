import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';

import Layout from '../components/page-layout/layout';
import ApplicationFormTemplate from '../components/page-templates/application-form/application-form.template';

export default ApplicationFormPage;

ApplicationFormPage.propTypes = {
    data: shape({
        job: shape({
            title: string.isRequired,
        }),
    }).isRequired,
};

function ApplicationFormPage(props) {
    const { data } = props;
    const { form } = data;
    const { title: subtitle, introduction, ...templateProps } = form;

    const headerProps = {
        title: 'Application Form',
        subtitle,
        introduction: subtitle,
    };

    return (
        <Layout {...headerProps}>
            <ApplicationFormTemplate {...templateProps} introduction={introduction} job={subtitle} />
        </Layout>
    );
}

export const query = graphql`
    query ApplicationFormPage($id: String!) {
        form: recruiteeOffer(id: { eq: $id }) {
            ...ApplicationFormFragment
        }
    }
`;
