import { shape, string } from 'prop-types';
import React from 'react';

import preventOrphans from '../../../lib/prevent-orphans';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './author.module.scss';

const authorPropTypes = {
    bio: string.isRequired,
    name: string,
    profilePic: ImageSrcPropType,
};

export default Author;
export const AuthorPropType = shape(authorPropTypes);

Author.propTypes = authorPropTypes;
Author.defaultProps = {
    name: null,
    profilePic: null,
};

function Author({ bio, profilePic, name }) {
    return (
        <section className={`${styles.blockquoteContainer}`}>
            <blockquote>
                {!!name && (
                    <footer>
                        {!!profilePic && (
                            <div className={styles.imageCropper}>
                                <Image className={styles.image} image={profilePic} ratio="100%" />
                            </div>
                        )}
                    </footer>
                )}
                <p>{preventOrphans(bio)}</p>
            </blockquote>
        </section>
    );
}
