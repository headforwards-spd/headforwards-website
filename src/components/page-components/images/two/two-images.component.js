import { shape } from 'prop-types';
import React from 'react';
import Image, { ImagePropType } from '../../../image/image.component';
import styles from './two-images.module.scss';

const twoImagesPropTypes = {
    leftImage: ImagePropType.isRequired,
    rightImage: ImagePropType.isRequired,
};

export default TwoImages;
export const TwoImagesPropType = shape(twoImagesPropTypes);

TwoImages.propTypes = twoImagesPropTypes;
function TwoImages({ leftImage, rightImage }) {
    return (
        <section className={styles.twoImages}>
            <Image image={leftImage} />
            <Image image={rightImage} />
        </section>
    );
}
