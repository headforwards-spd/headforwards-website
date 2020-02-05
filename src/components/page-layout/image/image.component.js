import GatsbyImage from 'gatsby-image';
import { any, objectOf, oneOfType, shape, string } from 'prop-types';
import React from 'react';

import styles from './image.module.scss';

const imageSrcPropTypes = [
    string,
    shape({
        publicURL: string,
        childImageSharp: shape({
            fluid: objectOf(any),
        }),
    }),
];

const imagePropTypes = {
    image: oneOfType(imageSrcPropTypes).isRequired,
    alt: string,
    ratio: string,
    className: string,
};

export default Image;
export const ImagePropType = shape(imagePropTypes);
export const ImageSrcPropType = oneOfType(imageSrcPropTypes);

Image.propTypes = imagePropTypes;
Image.defaultProps = {
    alt: null,
    ratio: '62.5%',
    className: '',
};
function Image({ image, alt, ratio, className = '', ...props }) {
    const { childImageSharp = null } = image || {};
    let src;
    if (childImageSharp) {
        const { fluid } = childImageSharp;
        const sizes = [
            '(max-width: 319px) calc(100vw - 2em)',
            '(max-width: 767px) calc(100vw - 2em)',
            '(max-width: 1023px) calc(100vw - 3em)',
            '(max-width: 1254px) 1170px',
            '1440px',
        ].join(', ');

        return (
            <GatsbyImage fluid={{...fluid, sizes}} alt={alt} durationFadeIn={500} className={className} {...props} />
        );
    }

    if (typeof image === 'string') {
        src = image;
    } else {
        const { publicURL } = image || {};
        src = publicURL;
    }

    return (
        <div className={`${styles.imageWrapper} ${className}`} {...props}>
            <div className={styles.padder} style={{ paddingBottom: ratio }} />
            <img
                {...{
                    src,
                    alt,
                }}
                className={styles.image}
                alt={alt}
            />
        </div>
    );
}
