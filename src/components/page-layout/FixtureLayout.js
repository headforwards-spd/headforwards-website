/* eslint-disable no-underscore-dangle */
import '../../scss/main.scss';
import '../../scss/cosmos.scss';

import { bool, node, string } from 'prop-types';
import React from 'react';

import styles from './theme.modules.scss';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in react-cosmic testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a react-cosmic
window.___navigate = () => {};

export default FixtureLayout;

FixtureLayout.propTypes = {
    className: string,
    children: node,
    wrap: bool,
};
FixtureLayout.defaultProps = {
    className: '',
    children: null,
    wrap: true,
};

function FixtureLayout({ wrap, className, children }) {
    return <div className={`${styles.storiesLayout} ${className}`}>{wrap ? <main>{children}</main> : children}</div>;
}
