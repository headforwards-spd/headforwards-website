import React                                                     from 'react';
import Image                                                     from '../image/image-component';
import {blogSection, flexCol, flexRow, fullWidthImage, imageRow} from './images-component.module.scss';

export function FullWidthImage({image}) {
    return (
        <div className={fullWidthImage}><Image image={image}/></div>
    );
}

export function TwoImages({leftImage, rightImage}) {
    return (
        <section className={imageRow}>
            <Image image={leftImage}/>
            <Image image={rightImage}/>
        </section>
    );
}


export function BlogImages({blogPost}) {

    return (
        <div className={blogSection}>
            <div className={flexRow}>
                <h1>From the Blog.</h1>
            </div>
        </div>
    );
}
