import { Requireable as string, shape } from 'prop-types';
import React from 'react';

import Postit from '../../page-components/postit/postit.component';
import Link from '../../page-layout/link/link.component';
import Markdown from '../../page-layout/markdown';
import styles from './index-page.module.scss';

const indexPostitPropTypes = {
    link: string.isRequired,
    title: string.isRequired,
    introduction: string.isRequired,
};

export default IndexPostit;
export const IndexPostitPropType = shape(indexPostitPropTypes);

IndexPostit.propTypes = indexPostitPropTypes;
function IndexPostit({ link, title, introduction }) {
    return (
        <Postit className={`${styles.postit}`}>
            <Link to={link}>
                <h2>{title}</h2>
                <Markdown source={introduction} truncate />
                <div className={styles.readMore}>Read more</div>
            </Link>
        </Postit>
    );
}
