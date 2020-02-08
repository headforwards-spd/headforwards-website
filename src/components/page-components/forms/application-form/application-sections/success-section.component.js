import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string } from 'prop-types';
import React from 'react';

import styles from '../application-form.module.scss';

export default SuccessSection;

SuccessSection.propTypes = { message: string.isRequired };
function SuccessSection({ message }) {
    return (
        <div className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            {message}
        </div>
    );
}
