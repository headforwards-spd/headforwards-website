import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Link from '../../link/link.component';
import styles from '../navbar.module.scss';
import { menuItemPropTypes } from './menu-item.prop-type';

export default class MenuItem extends Component {
    static propTypes = menuItemPropTypes;

    constructor(props) {
        super(props);

        const { link, location } = props;
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
        const { location, link, linkText, showTitle = false, children, className = '' } = this.props;
        const { isActive } = this.state;
        const { toggleMenu } = this;
        const hasChildren = !!children;

        const openClass = isActive ? styles.isActive : '';
        const childrenClass = hasChildren ? styles.hasChildren : '';

        return (
            <li className={`${childrenClass} ${openClass} ${className}`}>
                <Link to={link}>
                    {linkText}
                    {showTitle && hasChildren && (
                        <button type="button" onClick={toggleMenu.bind(this)}>
                            {(isActive && <FontAwesomeIcon icon={faMinus} fixedWidth />) || (
                                <FontAwesomeIcon icon={faPlus} fixedWidth />
                            )}
                        </button>
                    )}
                </Link>
                {!!hasChildren && (
                    <section>
                        {showTitle && <h2>{linkText}</h2>}
                        {showTitle && (
                            <ul>
                                {children.map(({ id, ...item }) => (
                                    <MenuItem key={id} {...item} location={location} />
                                ))}
                            </ul>
                        )}
                    </section>
                )}
            </li>
        );
    }
}
