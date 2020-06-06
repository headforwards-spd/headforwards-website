import GatsbyImage from 'gatsby-image';
import { any, objectOf, oneOfType, shape, string } from 'prop-types';
import React, { useCallback, useState } from 'react';

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
    loadClassName: string,
};

export default Image;
export const ImagePropType = shape(imagePropTypes);
export const ImageSrcPropType = oneOfType(imageSrcPropTypes);

Image.propTypes = imagePropTypes;
Image.defaultProps = {
    alt: null,
    ratio: '62.5%',
    className: '',
    loadClassName: '',
};

function Image({ image, alt, ratio, className, loadClassName, ...props }) {
    const { childImageSharp, extension } = image || {};
    let src;
    if (childImageSharp && extension !== 'svg') {
        const { fluid } = childImageSharp;
        const [startLoad, setStartLoad] = useState(false);

        const handleLoad = useCallback(() => setStartLoad(true), [setStartLoad]);
        const allClasses = startLoad ? `${className} ${loadClassName}` : className;

        return (
            <GatsbyImage
                fluid={fluid}
                alt={alt}
                durationFadeIn={250}
                onLoad={handleLoad}
                className={allClasses}
                {...props}
            />
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
