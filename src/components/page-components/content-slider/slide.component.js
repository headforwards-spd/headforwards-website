import { shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './content-slider.module.scss';

export const SlideProps = {
    linkText: string.isRequired,
    link: shape({
        fields: shape({
            link: string,
        }),
        frontmatter: shape({
            title: string,
            summary: shape({
                image: ImageSrcPropType,
                text: string,
            }),
        }),
    }).isRequired,
};

export default Slide;
Slide.propTypes = SlideProps;

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
            <Image image={image} />
        </section>
    );
}
