import { string } from 'prop-types';
import React from 'react';
import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import styles from './singular-image.module.scss';

const singularImagePropTypes = {
    image: ImageSrcPropType.isRequired,
    className: string,
};

export default SingularImage;

SingularImage.propTypes = singularImagePropTypes;
SingularImage.defaultProps = {
    className: '',
};

function SingularImage({ image, className }) {
    return <Image image={image} ratio="100%" className={`${styles.image} ${className}`} />;
}
