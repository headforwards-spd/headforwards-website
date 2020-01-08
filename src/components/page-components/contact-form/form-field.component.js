import { useField } from 'formik';
import { bool, string } from 'prop-types';
import React from 'react';
import FormError from './form-error.component';
import styles from './contact-form.module.scss';

const formFieldPropTypes = {
    name: string.isRequired,
    label: string.isRequired,
    disabled: bool,
    required: bool,
};

Input.propTypes = formFieldPropTypes;
Input.defaultProps = {
    disabled: false,
    required: false,
};
export function Input({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;

    return (
        <label htmlFor={name} className={styles.field}>
            {label} {isRequired && '*'}
            <input id={name} {...field} {...props} disabled={disabled} />
            <FormError {...meta} />
        </label>
    );
}

Textarea.propTypes = formFieldPropTypes;
Textarea.defaultProps = {
    disabled: false,
    required: false,
};
export function Textarea({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;

    return (
        <label htmlFor={name} className={styles.field}>
            {label} {isRequired && '*'}
            <textarea id={name} {...field} {...props} disabled={disabled} />
            <FormError {...meta} />
        </label>
    );
}

Checkbox.propTypes = formFieldPropTypes;
Checkbox.defaultProps = {
    disabled: false,
    required: false,
};
export function Checkbox({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField({ ...props, value: label });
    const { name } = props;

    return (
        <label htmlFor={name} className={`${styles.field} ${styles.checkbox}`}>
            <input id={name} {...field} {...props} disabled={disabled} />
            {label} {isRequired && '*'}
            <FormError {...meta} />
        </label>
    );
}
