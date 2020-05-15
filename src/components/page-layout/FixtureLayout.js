/* eslint-disable no-underscore-dangle */
import '../../scss/main.scss';
import '../../scss/cosmos.scss';

import { node } from 'prop-types';
import React from 'react';

import styles from './layout.stories.modules.scss';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = () => {};

export default FixtureLayout;

FixtureLayout.propTypes = {
    children: node,
};
FixtureLayout.defaultProps = {
    children: null,
};

function FixtureLayout({ children }) {
    return (
        <div className={styles.storiesLayout}>
            <main>{children}</main>
        </div>
    );
}
