import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string } from 'prop-types';
import React from 'react';

import styles from '../application-form.module.scss';

export default ErrorSection;
ErrorSection.propTypes = { message: string.isRequired };
function ErrorSection({ message }) {
    return (
        <div className={styles.error}>
            <FontAwesomeIcon icon={faTimesCircle} size="lg" />
            {message}
        </div>
    );
}
