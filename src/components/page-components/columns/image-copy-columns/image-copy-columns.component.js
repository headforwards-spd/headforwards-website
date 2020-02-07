import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import ContentComponent from '../../content.component';
import styles from './image-copy-columns.module.scss';

const imageCopyColumnsPropTypes = {
    image: ImageSrcPropType.isRequired,
    isRightImage: bool,
    title: string,
    content: arrayOf(any),
    link: shape({
        link: string.isRequired,
        linkText: string.isRequired,
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
function ImageCopyColumns({ image, isRightImage, title, content, link }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const hasLink = !!link;

    return (
        <section className={`${styles.columnsWrapper} ${imageClass} ${styles.isImage}`}>
            <Image image={image} ratio="100%" alt={title} className={styles.image} />
            <section className={styles.copy}>
                {title && <h2>{title}</h2>}
                {content && (
                    <section>
                        {content.map(({ id, type, ...item }) => (
                            <ContentComponent key={id} type={type} {...item} />
                        ))}
                    </section>
                )}
                {hasLink && <Link to={link.link}>{link.linkText}</Link>}
            </section>
        </section>
    );
}
