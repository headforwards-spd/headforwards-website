import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './content-slider.module.scss';

// const slidePropTypes = {
//     title: string.isRequired,
//     text: string.isRequired,
//     image: ImageSrcPropType.isRequired,
// };

export default Slide;
// export const SlidePropType = shape(slidePropTypes);
//
// Slide.propTypes = slidePropTypes;

function Slide({ linkText, link: linkPage }) {
    const { fields: { link } = {}, frontmatter: { title, summary: { text, image } = {} } = {} } = linkPage || {};

    return (
        <section className={styles.slide}>
            <section>
                <h2>{title}</h2>
                <section>
                    <Markdown source={text} />
                </section>
                <Link to={link}>{linkText}</Link>
            </section>
            <Image className={styles.slideImage} image={image} />
        </section>
    );
}
