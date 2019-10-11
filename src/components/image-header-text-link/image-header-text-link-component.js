import React                              from 'react';
import Image                              from '../image/image-component'
import {flexColumn, flexRow, left, right} from './image-header-text-link-component.module.scss';

export default ImageHeader;

function ImageHeader({image, position, title, text, linkDestination, linkText}) {

    const side = position === true ? right : left;
    return (
        <div className={`${flexRow} ${side}`}>
            <div className={flexColumn}>
                <Image image={image}/>
            </div>
            <div className={flexColumn}>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={linkDestination}>{linkText} &#8594;</a>
            </div>
        </div>
    );

}
