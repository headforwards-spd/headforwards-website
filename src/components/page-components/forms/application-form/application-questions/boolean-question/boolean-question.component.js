import { useField } from 'formik';
import { bool, number, string } from 'prop-types';
import React from 'react';

import styles from '../../../contact-form/contact-form.module.scss';
import FormError from '../../../contact-form/form-error.component';
import { Radio } from '../../../form-field.component';

export default BooleanQuestion;

BooleanQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
    required: bool,
    disabled: bool,
};
BooleanQuestion.defaultProps = {
    required: false,
    disabled: false,
};
function BooleanQuestion({ id, body: label, required, disabled }) {
    const name = `q-${id}`;
    const type = 'radio';

    const [, meta] = useField({ name });

    const radioField = {
        name,
        type,
        disabled,
        isGroup: true,
    };

    return (
        <div role="group" className={styles.field}>
            <h2>
                {label}
                {required && <abbr title="required">&nbsp;*</abbr>}
            </h2>
            <Radio {...radioField} value="Yes" label="Yes" />
            <Radio {...radioField} value="No" label="No" />
            <FormError {...meta} />
        </div>
    );
}
