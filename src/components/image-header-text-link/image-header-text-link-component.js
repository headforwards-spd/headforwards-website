import React                              from 'react';
import {flexColumn, flexRow, left, right} from './image-header-text-link-component.module.scss';

export default ImageHeader;

ImageHeader.defaultProps = {
    images: []
};

function ImageHeader({images}) {

    const side = images.position === true ? right : left;
    return (
        <div className={`${flexRow} ${side}`}>
            {images.map(image => (<section>
            <div className={flexColumn}>
                <img src={image.image}/>
            </div>
            <div className={flexColumn}>
                <h1>{image.header}</h1>
                <p>{image.sentence}</p>
                <a href={image.linkDestination}>{image.linkText} &#8594;</a>
            </div></section>))};
        </div>
    );

}