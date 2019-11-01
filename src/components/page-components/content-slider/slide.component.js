import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Image, { ImageSrcPropType } from '../../image/image.component';
import Link from '../../link/link.component';
import styles from './content-slider.module.scss';

const slidePropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: ImageSrcPropType.isRequired,
};

export default Slide;
export const SlidePropType = shape(slidePropTypes);

Slide.propTypes = slidePropTypes;
function Slide({ title, text, image }) {
    return (
        <section className={styles.slide}>
            <section>
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to="/">Read the case study</Link>
            </section>
            <Image className={styles.slideImage} image={image} />
        </section>
    );
}
