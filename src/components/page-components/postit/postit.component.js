import React from 'react';
import { bool, string } from 'prop-types';
import styles from './postit.module.scss';

const postitPropTypes = {
    isRightImage: bool,
    className: string,
};

export default Postit;

Postit.propTypes = postitPropTypes;
Postit.defaultProps = {
    isRightImage: false,
    className: '',
};
function Postit({ isRightImage, className }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const version = Math.floor(Math.random() * 8 + 1);

    return <div className={`${styles.postit} ${styles[`v${version}`]} ${imageClass} ${className}`} />;
}
