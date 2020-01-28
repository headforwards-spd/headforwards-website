import { arrayOf, string } from 'prop-types';
import React from 'react';

import ApplicationForm from '../../page-components/forms/application-form/application-form.component';

export default ApplicationFormTemplate;

ApplicationFormTemplate.propTypes = {
    subtitle: string,
    salary: string,
    tags: arrayOf(string),
};
ApplicationFormTemplate.defaultProps = {
    subtitle: '',
    salary: '',
    tags: [],
};
function ApplicationFormTemplate({ job, salary, tags, ...form }) {
    return <ApplicationForm job={job} {...form} formName="job-application-form" />;
}
