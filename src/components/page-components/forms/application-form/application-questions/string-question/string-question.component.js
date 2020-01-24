import { useField } from 'formik';
import { bool, number, string } from 'prop-types';
import React from 'react';
import { Input } from '../../../form-field.component';

export default StringQuestion;

StringQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
    required: bool,
    disabled: bool,
};
StringQuestion.defaultProps = {
    required: false,
    disabled: false,
};
function StringQuestion({ id, body: question, required, disabled, ...props }) {
    const field = {
        name: `q-${id}`,
        label: question,
        type: 'text',
        required,
        disabled,
    };

    return <Input {...field} {...props} />;
}
