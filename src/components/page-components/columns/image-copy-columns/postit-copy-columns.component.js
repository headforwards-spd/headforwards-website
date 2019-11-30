import React from 'react';
import { shape, bool, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import Postit from '../../postit/postit.component';
import styles from './image-copy-columns.module.scss';

const postitCopyColumnsPropTypes = {
    image: ImageSrcPropType.isRequired,
    isRightImage: bool,
    title: string.isRequired,
    text: string.isRequired,
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
};
function PostitCopyColumns({ image, isRightImage, title, text, link }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const hasLink = !!link;

    return (
        <section className={`${styles.columnsWrapper} ${imageClass}`}>
            <Postit image={image} isRightImage={isRightImage} className={styles.postit} />
            <section className={styles.copy}>
                <h1>{title}</h1>
                <section>
                    <ReactMarkdown source={text} />
                </section>
                {hasLink && (
                    <Link to={link.link} className={styles.arrowLink}>
                        {link.linkText}
                    </Link>
                )}
            </section>
        </section>
    );
}
