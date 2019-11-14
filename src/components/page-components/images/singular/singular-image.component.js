import React from 'react';
import Image, { ImageSrcPropType } from '../../../image/image.component';
import styles from './singular-image.module.scss';

const singularImagePropTypes = {
    image: ImageSrcPropType.isRequired,
};

export default SingularImage;

SingularImage.propTypes = singularImagePropTypes;
SingularImage.defaultProps = {};

function SingularImage({ image }) {
    return <Image image={image} ratio="100%" className={styles.image} />;
}
