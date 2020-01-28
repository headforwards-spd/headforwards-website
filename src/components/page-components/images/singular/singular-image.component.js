import { string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';

const singularImagePropTypes = {
    image: ImageSrcPropType.isRequired,
    alt: string,
    className: string,
};

export default SingularImage;

SingularImage.propTypes = singularImagePropTypes;
SingularImage.defaultProps = {
    className: '',
    alt: null,
};

function SingularImage({ image, alt, className = '' }) {
    return <Image image={image} alt={alt} ratio="100%" className={`${className}`} />;
}
