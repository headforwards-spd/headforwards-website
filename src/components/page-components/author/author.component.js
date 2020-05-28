import { shape, string } from 'prop-types';
import React from 'react';

import preventOrphans from '../../../lib/prevent-orphans';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './author.module.scss';

const authorPropTypes = {
    bio: string.isRequired,
    name: string,
    profilePic: ImageSrcPropType,
    jobTitle: string,
};

export default Author;
export const AuthorPropType = shape(authorPropTypes);

Author.propTypes = authorPropTypes;
Author.defaultProps = {
    name: null,
    profilePic: null,
    jobTitle: null,
};

function Author({ bio, profilePic, name, jobTitle }) {
    return (
        <section className={styles.authorContainer}>
            {!!name && (
                <header>
                    <section>
                        <h2>{name}</h2>
                        {!!jobTitle && <p>{jobTitle}</p>}
                    </section>
                    {!!profilePic && (
                        <div className={styles.imageCropper}>
                            <Image image={profilePic} ratio="100%" />
                        </div>
                    )}
                </header>
            )}
            <p>{preventOrphans(bio)}</p>
        </section>
    );
}
