import { any, arrayOf, bool, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../../lib/hash-array';
import { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import ContentComponent from '../../content.component';
import Postit from '../../postit/postit.component';
import styles from './image-copy-columns.module.scss';

const postitCopyColumnsPropTypes = {
    image: ImageSrcPropType.isRequired,
    isRightImage: bool,
    title: string,
    content: arrayOf(any),
    link: shape({
        link: string.isRequired,
        linkText: string.isRequired,
    }),
};

export default PostitCopyColumns;
export const PostitCopyColumnsPropType = shape(postitCopyColumnsPropTypes);

PostitCopyColumns.propTypes = postitCopyColumnsPropTypes;
PostitCopyColumns.defaultProps = {
    isRightImage: false,
    link: null,
    title: null,
    content: [],
};

function PostitCopyColumns({ image, isRightImage, title, content, link }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';

    const hasLink = !!link;

    const hashedContent = useMemo(() => (content ? hashArray(content) : content), [content]);

    return (
        <section className={`${styles.columnsWrapper} ${imageClass}`}>
            <Postit image={image} alt={title} isRightImage={isRightImage} className={styles.postit} />
            <section className={styles.copy}>
                {title && <h2>{title}</h2>}
                {hashedContent && (
                    <section className={styles.markdown}>
                        {hashedContent.map(({ id, type, ...item }) => (
                            <ContentComponent key={id} type={type} {...item} />
                        ))}
                    </section>
                )}
                {hasLink && (
                    <Link to={link.link} className={styles.arrowLink}>
                        {link.linkText}
                    </Link>
                )}
            </section>
        </section>
    );
}
