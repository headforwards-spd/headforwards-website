import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import SingularImage from '../../images/singular/singular-image.component';
import Markdown from '../../markdown';
import Quote from '../../quote/quote.component';
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
            <SingularImage image={image} ratio="100%" alt={title} className={styles.image} />
            <section className={styles.copy}>
                {title && <h2>{title}</h2>}
                {content && (
                    <section>
                        {content.map(({ type, ...item }) => (
                            <>
                                {type === 'markdown-component' && <Markdown source={item.text} />}
                                {type === 'quote-component' && <Quote {...item} fullWidth />}
                            </>
                        ))}
                    </section>
                )}
                {hasLink && <Link to={link.link}>{link.linkText}</Link>}
            </section>
        </section>
    );
}
