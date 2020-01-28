import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../markdown';
import styles from './content-slider.module.scss';

const slidePropTypes = {
    title: string.isRequired,
    text: string.isRequired,
    image: ImageSrcPropType.isRequired,
};

export default Slide;
export const SlidePropType = shape(slidePropTypes);

Slide.propTypes = slidePropTypes;
function Slide({ title, text, image }) {
    return (
        <section className={styles.slide}>
            <section>
                <h2>{title}</h2>
                <section>
                    <Markdown source={text} />
                </section>
                <Link to="/">Read the case study</Link>
            </section>
            <Image className={styles.slideImage} image={image} />
        </section>
    );
}
