import React   from 'react';
import imgBlog from '../../img/blog.png';
import Image   from '../image/image-component';
import {
    blogSection, flexCol, flexRow, fullWidthImage, imageRow
}              from './images-component.module.scss';

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

export function BlogImages() {
    return (
        <div className={blogSection}>
            <div className={flexRow}>
                <h1>From the Blog.</h1>
            </div>
            <div className={flexRow}>
                <div className={flexCol}>
                    <div>
                        <Image image={imgBlog}/>
                        <h2>
                            Agile Code Retreat Two Days of Enhancing Software Development
                            Practises </h2>
                    </div>
                </div>
                <div className={flexCol}>
                    <div>
                        <Image image={imgBlog}/>
                        <h2>Support for EU Settled Status Registrations</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
