import { bool, string } from 'prop-types';
import React from 'react';
import styles from './contact-form.module.scss';

export default FormError;

FormError.propTypes = {
    touched: bool,
    error: string,
};

FormError.defaultProps = {
    touched: false,
    error: null,
};

function FormError({ touched, error }) {
    return touched && error ? <div className={styles.error}>{error}</div> : null;
}
