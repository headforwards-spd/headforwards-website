import React                   from 'react';
import { shape, bool, string } from 'prop-types';
import ReactMarkdown           from 'react-markdown';
import { ImageSrcPropType }    from '../../../page-layout/image/image.component';
import Link                    from '../../../page-layout/link/link.component';
import styles                  from './image-copy-columns.module.scss';
import SingularImage           from '../../images/singular/singular-image.component';

const imageCopyColumnsPropTypes = {
    image: ImageSrcPropType.isRequired,
    isRightImage: bool,
    title: string.isRequired,
    text: string.isRequired,
    link: string,
    linkText: string,
};

export default ImageCopyColumns;
export const ImageCopyColumnsPropType = shape(imageCopyColumnsPropTypes);

ImageCopyColumns.propTypes = imageCopyColumnsPropTypes;
ImageCopyColumns.defaultProps = {
    isRightImage: false,
    link: null,
    linkText: null,
};
function ImageCopyColumns({ image, isRightImage, title, text, link, linkText }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const hasLink = !!link && !!linkText;

    return (
        <section className={`${styles.columnsWrapper} ${imageClass}`}>
            <SingularImage image={image} ratio="100%" className={styles.image} />
            <section className={styles.copy}>
                <h1>{title}</h1>
                <section>
                    <ReactMarkdown source={text} />
                </section>
                {hasLink && <Link to={link}>{linkText}</Link>}
            </section>
        </section>
    );
}
