import { useField } from 'formik';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';

import styles from '../../../contact-form/contact-form.module.scss';
import FormError from '../../../contact-form/form-error.component';
import { Radio } from '../../../form-field.component';

export default SingleChoiceQuestion;

SingleChoiceQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
    open_question_options: arrayOf(
        shape({
            id: number.isRequired,
            body: string.isRequired,
        })
    ).isRequired,
    required: bool,
    disabled: bool,
};
SingleChoiceQuestion.defaultProps = {
    required: false,
    disabled: false,
};
function SingleChoiceQuestion({ id, body: label, open_question_options: options, required, disabled }) {
    const name = `q-${id}`;
    const type = 'radio';

    const [field, meta] = useField({ name });

    return (
        <div role="group" className={styles.field}>
            <h2>
                {label}
                {required && <abbr title="required">&nbsp;*</abbr>}
            </h2>
            {options.map(({ id: value, body: option }) => {
                const field = {
                    name,
                    label: option,
                    type,
                    value: value.toString(),
                    disabled,
                    isGroup: true,
                };

                return <Radio key={value} {...field} />;
            })}
            <FormError {...meta} />
        </div>
    );
}
