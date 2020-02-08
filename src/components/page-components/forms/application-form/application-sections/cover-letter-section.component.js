import { bool } from 'prop-types';
import React from 'react';

import { Textarea } from '../../form-field.component';
import styles from '../application-form.module.scss';
import { schema } from '../application-form.schema';

export default CoverLetterSection;
CoverLetterSection.propTypes = {
    isRequired: bool,
    isSubmitting: bool,
};
CoverLetterSection.defaultProps = {
    isRequired: false,
    isSubmitting: false,
};
function CoverLetterSection({ isRequired, isSubmitting }) {
    return (
        <section>
            <header>
                <h2>
                    Cover letter
                    {isRequired && <abbr title="required">&nbsp;*</abbr>}
                </h2>
                <p>Insert your cover letter here</p>
            </header>
            <section>
                <Textarea
                    className={styles.fullWidth}
                    {...schema.cover_letter.field}
                    required={isRequired}
                    disabled={isSubmitting}
                />
            </section>
        </section>
    );
}
