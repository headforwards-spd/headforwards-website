import { shape, string } from 'prop-types';
import React from 'react';
import { ImageSrcPropType } from '../../page-layout/image/image.component';

import Postit from '../../page-components/postit/postit.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './index-page.module.scss';

const indexPostitPropTypes = {
    link: string.isRequired,
    title: string.isRequired,
    summary: shape({
        image: ImageSrcPropType,
        text: string,
    }).isRequired,
};

export default IndexPostit;
export const IndexPostitPropType = shape(indexPostitPropTypes);

IndexPostit.propTypes = indexPostitPropTypes;

function IndexPostit({ link, title, summary }) {
    const { text } = summary || {};

    return (
        <Postit className={`${styles.postit}`}>
            <Link to={link}>
                <h2>{title}</h2>
                <Markdown source={text} truncate />
                <div className={styles.readMore}>Read more</div>
            </Link>
        </Postit>
    );
}
