import React                     from 'react'
import Image, { ImagePropsType } from '../../image/image-component'
import styles from './two-images.module.scss'

export default TwoImages;

TwoImages.porpTypes = {
    leftImage: ImagePropsType.isRequired,
    rightImage: ImagePropsType.isRequired,
};

function TwoImages({leftImage, rightImage}) {
    return (
        <section className={styles.twoImages}>
            <Image image={leftImage}/>
            <Image image={rightImage}/>
        </section>
    );
}
