import React from 'react';
import { shape, bool, string, arrayOf, any } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { ImageSrcPropType } from '../../../page-layout/image/image.component';
import Link from '../../../page-layout/link/link.component';
import Postit from '../../postit/postit.component';
import Quote from '../../quote/quote.component';
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

    return (
        <section className={`${styles.columnsWrapper} ${imageClass} ${styles.isPostit}`}>
            <Postit image={image} alt={title} isRightImage={isRightImage} className={styles.postit} />
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
                {hasLink && (
                    <Link to={link.link} className={styles.arrowLink}>
                        {link.linkText}
                    </Link>
                )}
            </section>
        </section>
    );
}
