import React from 'react';
import { bool, node, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './postit.module.scss';

const postitPropTypes = {
    image: ImageSrcPropType.isRequired,
    alt: string,
    isRightImage: bool,
    className: string,
    children: node,
};

export default Postit;

Postit.propTypes = postitPropTypes;
Postit.defaultProps = {
    isRightImage: false,
    alt: null,
    className: '',
    children: null,
};
function Postit({ image, alt, isRightImage, className, children }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const version = Math.floor(Math.random() * 8 + 1);

    return (
        <div className={`${styles.postit} ${styles[`v${version}`]} ${imageClass} ${className}`}>
            {children || <Image image={image} alt={alt} ratio="100%" />}
        </div>
    );
}
