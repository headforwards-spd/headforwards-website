import React                              from 'react';
import {flexColumn, flexRow, left, right} from './image-header-text-link-component.module.scss';

export function ImageHeader({header, sentence, position, image, linkText, linkDestination}) {

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
            </div>
        </div>
    );

}