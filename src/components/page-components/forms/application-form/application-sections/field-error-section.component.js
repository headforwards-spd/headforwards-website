import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from '../application-form.module.scss';
import { fieldErrorText } from '../application-form.schema';

export default FieldErrorSection;

function FieldErrorSection() {
    return (
        <div className={styles.error}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg" />
            {fieldErrorText}
        </div>
    );
}
