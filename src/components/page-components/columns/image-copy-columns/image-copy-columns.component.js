import { any, arrayOf, bool, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../../lib/hash-array';
import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import ContentComponent from '../../content.component';
import styles from './image-copy-columns.module.scss';

const imageCopyColumnsPropTypes = {
    isRightImage: bool,
    title: string,
    image: ImageSrcPropType.isRequired,
    content: arrayOf(any),
    link: shape({
        linkText: string.isRequired,
        link: shape({
            fields: shape({
                link: string,
            }),
        }).isRequired,
    }),
};

export default ImageCopyColumns;
export const ImageCopyColumnsPropType = shape(imageCopyColumnsPropTypes);

ImageCopyColumns.propTypes = imageCopyColumnsPropTypes;
ImageCopyColumns.defaultProps = {
    isRightImage: false,
    link: null,
    title: null,
    content: [],
};

function ImageCopyColumns({ image, isRightImage, title, content, link: linkPage }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const { fields: { link } = {} } = linkPage || {};
    const hasLink = !!link;

    const hashedContent = useMemo(() => (content ? hashArray(content) : content), [content]);

    return (
        <section className={`${styles.columnsWrapper} ${imageClass} ${styles.isImage}`}>
            <Image image={image} ratio="100%" alt={title} className={styles.image} />
            <section className={styles.copy}>
                {title && <h2>{title}</h2>}
                {hashedContent && (
                    <section className={styles.markdown}>
                        {hashedContent.map(({ id, type, ...item }) => (
                            <ContentComponent key={id} type={type} {...item} />
                        ))}
                    </section>
                )}
                {hasLink && <Link to={link.link}>{link.linkText}</Link>}
            </section>
        </section>
    );
}
