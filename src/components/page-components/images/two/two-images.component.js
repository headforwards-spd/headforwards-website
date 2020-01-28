import { bool, shape } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import styles from './two-images.module.scss';

const twoImagesPropTypes = {
    flip: bool,
    leftImage: ImageSrcPropType.isRequired,
    rightImage: ImageSrcPropType.isRequired,
};

export default TwoImages;
export const TwoImagesPropType = shape(twoImagesPropTypes);

TwoImages.propTypes = twoImagesPropTypes;
TwoImages.defaultProps = {
    flip: false,
};
function TwoImages({ flip, leftImage, rightImage }) {
    const flipClass = flip ? styles.flip : '';

    const { name: leftImageName = '' } = leftImage || {};
    const { name: rightImageName = '' } = rightImage || {};

    const leftImageAlt = leftImageName.replace(/[-_]/g, ' ').toLowerCase();
    const rightImageAlt = rightImageName.replace(/[-_]/g, ' ').toLowerCase();

    return (
        <section className={`${styles.twoImages} ${flipClass}`}>
            <Image image={leftImage} alt={leftImageAlt} />
            <Image image={rightImage} alt={rightImageAlt} />
        </section>
    );
}
