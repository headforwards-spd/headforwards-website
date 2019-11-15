import React                   from 'react';
import { shape, bool, string } from 'prop-types';
import ReactMarkdown           from 'react-markdown';
import Link                    from '../../../link/link.component';
import Postit                  from '../../postit/postit.component';
import styles from './image-copy-columns.module.scss';

const postitCopyColumnsPropTypes = {
    isRightImage: bool,
    title: string.isRequired,
    text: string.isRequired,
    link: string,
    linkText: string,
};

export default PostitCopyColumns;
export const PostitCopyColumnsPropType = shape(postitCopyColumnsPropTypes);

PostitCopyColumns.propTypes = postitCopyColumnsPropTypes;
PostitCopyColumns.defaultProps = {
    isRightImage: false,
    link: null,
    linkText: null,
};
function PostitCopyColumns({ isRightImage, title, text, link, linkText }) {
    const imageClass = isRightImage === true ? styles.isRightImage : '';
    const hasLink = !!link && !!linkText;

    return (
        <section className={`${styles.columnsWrapper} ${imageClass}`}>
            <Postit isRightImage={isRightImage} className={styles.postit} />
            <section className={styles.copy}>
                <h1>{title}</h1>
                <section>
                    <ReactMarkdown source={text} />
                </section>
                {hasLink && <Link to={link} className={styles.arrowLink}>{linkText}</Link>}
            </section>
        </section>
    );
}
