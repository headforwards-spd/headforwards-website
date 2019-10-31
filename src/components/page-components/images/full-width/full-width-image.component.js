import React                     from 'react'
import Image, { ImagePropsType } from '../../../image/image.component'
import styles                    from './full-width-image.module.scss';

export default FullWidthImage;

FullWidthImage.propTypes = {
    image: ImagePropsType.isRequired
};

function FullWidthImage({image}) {

    return <Image className={styles.fullWidthImage} image={image}/>;
}
