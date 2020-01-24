import { useField } from 'formik';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';
import FormError from '../../../contact-form/form-error.component';
import { Checkbox } from '../../../form-field.component';
import styles from '../../../contact-form/contact-form.module.scss';

export default MultiChoiceQuestion;

MultiChoiceQuestion.propTypes = {
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
MultiChoiceQuestion.defaultProps = {
    required: false,
    disabled: false,
};
function MultiChoiceQuestion({ id, body: label, open_question_options: options, required, disabled }) {
    const name = `q-${id}`;
    const type = 'checkbox';

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

                return <Checkbox key={value} {...field} />;
            })}
            <FormError {...meta} />
        </div>
    );
}
