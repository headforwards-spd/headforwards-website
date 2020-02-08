import { bool } from 'prop-types';
import React from 'react';

import { File } from '../../form-field.component';
import { schema } from '../application-form.schema';

export default CvSection;
CvSection.propTypes = {
    isRequired: bool,
    isSubmitting: bool,
};
CvSection.defaultProps = {
    isRequired: false,
    isSubmitting: false,
};
function CvSection({ isRequired, isSubmitting }) {
    return (
        <section>
            <header>
                <h2>
                    CV / Resume
                    {isRequired && <abbr title="required">&nbsp;*</abbr>}
                </h2>
                <p>Upload your CV or resume file</p>
            </header>
            <section>
                <File {...schema.cv.field} required={isRequired} disabled={isSubmitting} />
            </section>
        </section>
    );
}
