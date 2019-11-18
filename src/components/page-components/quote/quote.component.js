import React from 'react';
import { shape, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './quote.module.scss';

const quotePropTypes = {
    quote: string.isRequired,
    name: string,
    jobTitle: string,
    profilePic: ImageSrcPropType,
};

export default Quote;
export const QuotePropType = shape(quotePropTypes);

Quote.propTypes = quotePropTypes;
Quote.defaultProps = {
    name: null,
    jobTitle: null,
    profilePic: null,
};
function Quote({ jobTitle, name, profilePic, quote }) {
    return (
        <blockquote className={styles.blockquoteContainer}>
            <p>{quote}</p>
            {!!name && (
                <footer>
                    {!!profilePic && (
                        <div className={styles.imageCropper}>
                            <Image className={styles.image} image={profilePic} ratio="100%" />
                        </div>
                    )}
                    <section>
                        <h1>{name}</h1>
                        {!!jobTitle && <p>{jobTitle}</p>}
                    </section>
                </footer>
            )}
        </blockquote>
    );
}
