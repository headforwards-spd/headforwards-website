import React                     from 'react'
import Image, { ImagePropsType } from '../image/image-component'
import { imageRow }              from './images.module.scss'

export default TwoImages;

TwoImages.porpTypes = {
    leftImage: ImagePropsType.isRequired,
    rightImage: ImagePropsType.isRequired,
};

function TwoImages({leftImage, rightImage}) {
    return (
        <section className={imageRow}>
            <Image image={leftImage}/>
            <Image image={rightImage}/>
        </section>
    );
}
