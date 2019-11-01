import { shape } from 'prop-types';
import React from 'react';
import Image, { ImagePropType } from '../../../image/image.component';
import styles from './full-width-image.module.scss';

const fullWidthImagePropTypes = {
    image: ImagePropType.isRequired,
};

export default FullWidthImage;
export const FullWidthImagePropType = shape(fullWidthImagePropTypes);

FullWidthImage.propTypes = fullWidthImagePropTypes;
function FullWidthImage({ image }) {
    return <Image className={styles.fullWidthImage} image={image} />;
}
