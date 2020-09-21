import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { any, arrayOf, bool, func, string } from 'prop-types';
import React, { Component, useMemo } from 'react';

import hashArray from '../../../../lib/hash-array';
import Link from '../../link/link.component';
import styles from '../navbar.module.scss';
import { menuItemPropTypes } from './menu-item.prop-type';

export default class MenuItem extends Component {
    static propTypes = menuItemPropTypes;

    constructor(props) {
        super(props);

        const { location, link: page } = props || {};
        const { fields } = page || {};
        const { link } = fields || {};
        const { pathname: path = '' } = location || {};

        const cleanLink = `/${link}/`.replace(/\/+/g, '/').replace(/^\/$/, 'homepage');
        const cleanPath = `/${path}/`.replace(/\/+/g, '/').replace(/^\/$/, 'homepage');
        const isActive = cleanPath.startsWith(cleanLink);

        this.state = { isActive };
    }

    toggleMenu(event) {
        event.preventDefault();
        event.stopPropagation();

        this.setState(({ isActive }) => ({ isActive: !isActive }));

        return false;
    }

    render() {
        const { location, linkText, showTitle = false, link: page, children, className = '' } = this.props;
        const { fields } = page || {};
        const { link } = fields || {};
        const { isActive } = this.state;
        const { toggleMenu } = this;

        const itemProps = {
            location,
            link,
            children,
            linkText,
            showTitle,
            isActive,
            className,
            toggleMenu: toggleMenu.bind(this),
        };

        return <Item {...itemProps} />;
    }
}
Item.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    location: any,
    link: string.isRequired,
    children: arrayOf(any),
    linkText: string.isRequired,
    showTitle: bool,
    isActive: bool,
    className: string,
    toggleMenu: func.isRequired,
};
Item.defaultProps = {
    location: null,
    children: null,
    showTitle: false,
    isActive: false,
    className: '',
};
function Item({ location, link, children, linkText, showTitle, isActive, className, toggleMenu }) {
    const hasChildren = !!children;

    const openClass = isActive ? styles.isActive : '';
    const childrenClass = hasChildren ? styles.hasChildren : '';

    const hashedChildren = useMemo(() => (children ? hashArray(children) : children), [children]);

    return (
        <li className={`${childrenClass} ${openClass} ${className}`}>
            <Link to={link}>
                {linkText}
                {showTitle && hasChildren && (
                    <button type="button" onClick={toggleMenu}>
                        {(isActive && <FontAwesomeIcon icon={faMinus} fixedWidth />) || (
                            <FontAwesomeIcon icon={faPlus} fixedWidth />
                        )}
                    </button>
                )}
            </Link>
            {hashedChildren && (
                <section>
                    {showTitle && <h2>{linkText}</h2>}
                    {showTitle && (
                        <ul>
                            {hashedChildren.map(({ id, ...item }) => (
                                <MenuItem key={id} {...item} location={location} />
                            ))}
                        </ul>
                    )}
                </section>
            )}
        </li>
    );
}
