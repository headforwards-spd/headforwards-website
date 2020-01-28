import { shape } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import styles from './full-width-image.module.scss';

const fullWidthImageSrcPropTypes = {
    image: ImageSrcPropType.isRequired,
};

export default FullWidthImage;
export const FullWidthImageSrcPropType = shape(fullWidthImageSrcPropTypes);

FullWidthImage.propTypes = fullWidthImageSrcPropTypes;
function FullWidthImage({ image }) {
    const { name: imageName = '' } = image || {};
    const alt = imageName.replace(/[-_]/g, ' ').toLowerCase();

    return <Image className={styles.fullWidthImage} image={image} alt={alt} />;
}
