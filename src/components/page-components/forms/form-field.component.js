import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useField } from 'formik';
import { bool, string } from 'prop-types';
import React from 'react';

import styles from './contact-form/contact-form.module.scss';
import FormError from './contact-form/form-error.component';

const formFieldPropTypes = {
    name: string.isRequired,
    label: string,
    required: bool,
};

Input.propTypes = { ...formFieldPropTypes };
Input.defaultProps = {
    label: null,
    required: false,
};
export function Input({ label, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;
    const { touched, error } = meta;
    const errorClass = touched && error ? styles.hasError : '';

    return (
        <label htmlFor={name} className={`${styles.field} ${errorClass}`}>
            {label || name}
            {isRequired && <abbr title="required">&nbsp;*</abbr>}
            <input id={name} {...field} {...props} />
            <FormError {...meta} />
        </label>
    );
}

Textarea.propTypes = formFieldPropTypes;
Textarea.defaultProps = {
    required: false,
    label: null,
    className: '',
};
export function Textarea({ label, required: isRequired, className, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;
    const { touched, error } = meta;
    const hasLabel = !!label;
    const errorClass = touched && error ? styles.hasError : '';

    return label ? (
        <label htmlFor={name} className={`${styles.field} ${className} ${errorClass}`}>
            {hasLabel && (
                <>
                    {label}
                    {isRequired && <abbr title="required">&nbsp;*</abbr>}
                </>
            )}
            <textarea id={name} {...field} {...props} />
            <FormError {...meta} />
        </label>
    ) : (
        <label htmlFor={name} className={`${styles.field} ${className} ${errorClass}`}>
            <textarea id={name} {...field} {...props} />
            <FormError {...meta} />
        </label>
    );
}

Checkbox.propTypes = { ...formFieldPropTypes, isGroup: bool };
Checkbox.defaultProps = {
    label: null,
    required: false,
    isGroup: false,
};
export function Checkbox({ label, required: isRequired, isGroup, ...props }) {
    const [field, meta] = useField(props);
    const { touched, error } = meta;
    const errorClass = touched && error ? styles.hasError : '';

    const { name, value } = props;
    const id = `${name}.${value}`;

    return (
        <label htmlFor={id} className={`${styles.field} ${styles.checkbox} ${errorClass}`}>
            <input {...{ id, ...field, ...props }} />
            {label || name}
            {isRequired && <abbr title="required">&nbsp;*</abbr>}
            {isRequired && <FormError {...meta} />}
        </label>
    );
}

Radio.propTypes = { ...formFieldPropTypes, isGroup: bool };
Radio.defaultProps = {
    label: null,
    required: false,
    isGroup: false,
};
export function Radio({ label, required: isRequired, isGroup, ...props }) {
    const [field, meta] = useField(props);
    const { name, value } = props;
    const id = `${name}.${value}`;
    const { touched, error } = meta;
    const errorClass = touched && error ? styles.hasError : '';

    return (
        <label htmlFor={id} className={`${styles.field} ${errorClass}`}>
            <input id={id} {...field} {...props} />
            {label || name}
            {isRequired && <abbr title="required">&nbsp;*</abbr>}
            {isRequired && <FormError {...meta} />}
        </label>
    );
}

File.propTypes = {};
File.defaultProps = {};
export function File({ label, required: isRequired, ...props }) {
    const [field, meta, actions] = useField(props);
    const { name, placeholder } = props;
    const { touched, error } = meta;
    const { setValue } = actions;
    const { value } = field;
    const { name: fileName = '' } = value || {};
    const hasLabel = !!label;
    const errorClass = touched && error ? styles.hasError : '';

    const inputClass = value ? styles.hasValue : '';

    const handleFileChange = e => {
        const { target } = e || {};
        const { files } = target || {};
        const [file] = files;

        !!file && setValue(file);
    };

    return (
        <label htmlFor={name} className={`${styles.field} ${styles.file} ${errorClass}`}>
            {hasLabel && (
                <>
                    {label}
                    {isRequired && <abbr title="required">&nbsp;*</abbr>}
                </>
            )}
            <div className={`${inputClass}`}>
                <button type="button">Add file</button>
                <input type="text" readOnly value={fileName} placeholder={placeholder} />
                <input id={name} type="file" value="" onChange={handleFileChange} />
                {!!fileName && (
                    <button type="button" onClick={() => setValue('')}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )}
            </div>
            <FormError {...meta} />
        </label>
    );
}
