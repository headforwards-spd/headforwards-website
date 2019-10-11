import React                      from 'react';
import {flexRow, blockquoteContainer, imageCropper, profilePic} from './quoteblock-component.module.scss';

export default Quoteblock;

function Quoteblock({jobTitle, name, image, quote}) {
    return (<div className={blockquoteContainer}>
                <blockquote>{quote}</blockquote>
                 <div className={flexRow}>
                     <div className={imageCropper}>
                        <img className={profilePic} src={image} />
                     </div>
                      <div>
                        <h1>{name}</h1>
                        <p>{jobTitle}</p>
                      </div>
                 </div>
            </div>);
}