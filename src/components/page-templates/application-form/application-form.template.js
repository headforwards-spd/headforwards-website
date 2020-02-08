import { string } from 'prop-types';
import React from 'react';

import Form from '../../page-components/forms/application-form/application-form.component';

export default ApplicationForm;

ApplicationForm.propTypes = {
    jobTitle: string.isRequired,
    subtitle: string.isRequired,
};
function ApplicationForm({ jobTitle, ...form }) {
    return <Form jobTitle={jobTitle} {...form} />;
}
