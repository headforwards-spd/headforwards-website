/* eslint-disable no-underscore-dangle */
import '../../scss/main.scss';
import '../../scss/cosmos.scss';

import { node, string } from "prop-types";
import React            from 'react';

import styles from './theme.modules.scss';

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
    className: string,
    children: node,
};
FixtureLayout.defaultProps = {
    className: '',
    children: null,
};

function FixtureLayout({ className, children }) {
    return (
        <div className={`${styles.storiesLayout} ${className}`}>
            <main>{children}</main>
        </div>
    );
}
