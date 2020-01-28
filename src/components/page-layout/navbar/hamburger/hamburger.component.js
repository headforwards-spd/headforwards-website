import React from 'react';

import styles from './hamburger.module.scss';
import { hamburgerPropTypes } from './hamburger.prop-type';

export default Hamburger;

Hamburger.propTypes = hamburgerPropTypes;
Hamburger.defaultProps = {
    activeClass: '',
};
function Hamburger({ activeClass, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`${activeClass} ${styles.hamburger} ${styles.hamburgerSlider}`}
            type="button"
            aria-label="Toggle Menu"
        >
            <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner} />
            </span>
        </button>
    );
}
