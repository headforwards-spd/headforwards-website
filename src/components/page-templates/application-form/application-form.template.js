import { string } from 'prop-types';
import React from 'react';

import ApplicationForm from '../../page-components/forms/application-form/application-form.component';

export default ApplicationFormTemplate;

ApplicationFormTemplate.propTypes = {
    jobTitle: string.isRequired,
    subtitle: string.isRequired,
};
function ApplicationFormTemplate({ jobTitle, ...form }) {
    return <ApplicationForm jobTitle={jobTitle} {...form} />;
}
