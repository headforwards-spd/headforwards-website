import { node } from 'prop-types';
import React from 'react';
import styles from './layout.stories.modules.scss';

export default StoriesLayout;

StoriesLayout.propTypes = {
    children: node,
};
StoriesLayout.defaultProps = {
    children: null,
};

function StoriesLayout({ children }) {
    return (
        <div className={styles.storiesLayout}>
            <main>{children}</main>
        </div>
    );
}
