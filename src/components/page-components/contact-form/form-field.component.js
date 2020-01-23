import { useField } from 'formik';
import { bool, string } from 'prop-types';
import React from 'react';
import FormError from './form-error.component';
import styles from './contact-form.module.scss';

const formFieldPropTypes = {
    name: string.isRequired,
    label: string,
    disabled: bool,
    required: bool,
};

Input.propTypes = { ...formFieldPropTypes, label: string.isRequired };
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
    label: null,
};
export function Textarea({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;

    return label ? (
        <label htmlFor={name} className={styles.field}>
            {label} {isRequired && '*'}
            <FormError {...meta} />
            <textarea id={name} {...field} {...props} disabled={disabled} />
        </label>
    ) : (
        <>
            <textarea id={name} {...field} {...props} disabled={disabled} />
            <FormError {...meta} />
        </>
    );
}

Checkbox.propTypes = { ...formFieldPropTypes, label: string.isRequired };
Checkbox.defaultProps = {
    disabled: false,
    required: false,
};
export function Checkbox({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField({ ...props, value: label });
    const { name } = props;

    return (
        <label htmlFor={name} className={`${styles.field} ${styles.checkbox}`}>
            <input id={name} {...field} {...props} disabled={disabled} />g
            {label} {isRequired && '*'}
            <FormError {...meta} />
        </label>
    );
}
