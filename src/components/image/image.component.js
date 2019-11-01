import PropTypes, { shape, string } from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';
import styles from './image.module.scss';

export default Image;

export const ImagePropType = shape({
    publicURL: PropTypes.string.isRequired,
    ratio: PropTypes.string,
});

Image.propTypes = {
    image: ImagePropType,
    alt: string,
    ratio: string,
    className: string,
};

Image.defaultProps = {
    image: null,
    alt: null,
    ratio: '62.5%',
    className: null,
};

function Image({ image, alt, ratio, className = '', ...props }) {
    const { childImageSharp = null } = image || {};
    if (childImageSharp) {
        const { fluid } = childImageSharp;
        return <GatsbyImage fluid={fluid} durationFadeIn={1000} className={className} {...props} />;
    }

    const src = typeof image === 'object' ? image.publicURL : image;

    return (
        <div className={`${styles.imageWrapper} ${className}`}>
            <div className={styles.padder} style={{ paddingBottom: ratio }} />
            <img {...{ src, alt, ...props }} className={styles.image} alt={alt} />
        </div>
    );
}
