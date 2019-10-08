import React                                                     from 'react';
import imgBlog                                                   from '../../img/blog.png';
import imgHair                                                   from '../../img/curlyhair.png';
import imgLaptop                                                 from '../../img/laptop.png';
import {blogSection, flexCol, flexRow, fullWidthImage, imageRow} from './images-component.module.scss';

export function FullWidthImage({img}) {
    return (
        <img src={img} className={fullWidthImage}/>
    );
}

export function TwoImages({firstImg, secondImg}) {
    return (
        <div className={imageRow}>
            <div className={flexRow}>
                <div className={flexCol}>
                    <img src={firstImg}/>
                </div>
                <div className={flexCol}>
                    <img src={secondImg}/>
                </div>
            </div>
        </div>
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
                        <img src={imgBlog}/>
                        <h2>Agile Code Retreat
                            Two Days of Enhancing Software Development Practises</h2>
                    </div>
                </div>
                <div className={flexCol}>
                    <div>
                        <img src={imgBlog}/>
                        <h2>Support for EU Settled Status Registrations</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}