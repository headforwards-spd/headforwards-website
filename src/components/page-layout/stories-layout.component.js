import React from 'react';
import styles from './layout.stories.modules.scss';

export default function StoriesLayout({ children }) {
    return (
        <div className={styles.storiesLayout}>
            <main>{children}</main>
        </div>
    );
}
