import { bool, shape, string } from 'prop-types';
import React from 'react';

import preventOrphans from '../../../lib/prevent-orphans';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from '../bio/bio.module.scss';

const quotePropTypes = {
    title: string,
    quote: string.isRequired,
    name: string,
    jobTitle: string,
    profilePic: ImageSrcPropType,
    fullWidth: bool,
};

export default Quote;
export const QuotePropType = shape(quotePropTypes);

Quote.propTypes = quotePropTypes;
Quote.defaultProps = {
    title: null,
    name: null,
    jobTitle: null,
    profilePic: null,
    fullWidth: false,
};

function Quote({ title, quote, name, jobTitle, profilePic, fullWidth }) {
    const fullWidthClass = fullWidth ? styles.fullWidth : '';

    return (
        <section className={`${styles.blockquoteContainer} ${fullWidthClass}`}>
            {title && <h2>{title}</h2>}
            <blockquote>
                <p>{preventOrphans(quote)}</p>
                {!!name && (
                    <footer>
                        {!!profilePic && (
                            <div className={styles.imageCropper}>
                                <Image className={styles.image} image={profilePic} ratio="100%" />
                            </div>
                        )}
                        <section>
                            <h2>{name}</h2>
                            {!!jobTitle && <p>{jobTitle}</p>}
                        </section>
                    </footer>
                )}
            </blockquote>
        </section>
    );
}
