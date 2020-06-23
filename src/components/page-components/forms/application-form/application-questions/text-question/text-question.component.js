import { bool, number, string } from 'prop-types';
import React from 'react';

import { Textarea } from '../../../form-field.component';

export default TextQuestion;

TextQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
    required: bool,
    disabled: bool,
};
TextQuestion.defaultProps = {
    required: false,
    disabled: false,
};

function TextQuestion({ id, body: question, required, disabled, ...props }) {
    const field = {
        name: `q-${id}`,
        label: question,
        rows: 6,
        required,
        disabled,
    };

    return <Textarea {...field} {...props} />;
}
