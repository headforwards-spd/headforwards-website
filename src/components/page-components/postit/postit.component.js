import React from 'react';
import { bool, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './postit.module.scss';

const postitPropTypes = {
    image: ImageSrcPropType.isRequired,
    isRightImage: bool,
    className: string,
};

export default Postit;

Postit.propTypes = postitPropTypes;
Postit.defaultProps = {
    isRightImage: false,
    className: '',
};
function Postit({ image, isRightImage, className }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const version = Math.floor(Math.random() * 8 + 1);

    return (
        <div className={`${styles.postit} ${styles[`v${version}`]} ${imageClass} ${className}`}>
            <Image image={image} ratio="100%" />
        </div>
    );
}
