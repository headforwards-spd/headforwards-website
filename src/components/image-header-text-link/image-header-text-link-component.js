import React                              from 'react';
import {flexColumn, flexRow, left, right} from './image-header-text-link-component.module.scss';

export default ImageHeader;

function ImageHeader({image, position, header, sentence, linkDestination, linkText}) {

    const side = position === true ? right : left;
    return (
        <div className={`${flexRow} ${side}`}>
            <div className={flexColumn}>
                <img src={image}/>
            </div>
            <div className={flexColumn}>
                <h1>{header}</h1>
                <p>{sentence}</p>
                <a href={linkDestination}>{linkText} &#8594;</a>
            </div>))};
        </div>
    );

}