import React from 'react';
import { shape, bool, string, arrayOf, any } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import Quote from '../../quote/quote.component';
import styles from './image-copy-columns.module.scss';
import SingularImage from '../../images/singular/singular-image.component';

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
            <SingularImage image={image} ratio="100%" className={styles.image} />
            <section className={styles.copy}>
                {title && <h2>{title}</h2>}
                {content && (
                    <section>
                        {content.map(({ type, ...item }) => (
                            <>
                                {type === 'markdown-component' && <ReactMarkdown source={item.text} />}
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
