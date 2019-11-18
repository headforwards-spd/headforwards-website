import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Link from '../../link/link.component';
import { menuItemPropTypes } from './menu-item.prop-type';
import styles from '../navbar.module.scss';

export default class MenuItem extends Component {
    static propTypes = menuItemPropTypes;

    state = {
        isOpen: false,
    };

    toggleMenu(event) {
        event.preventDefault();
        event.stopPropagation();

        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });

        return false;
    }

    render() {
        const { link, linkText, children } = this.props;
        const { isOpen } = this.state;
        const { toggleMenu } = this;
        const hasChildren = !!children;

        const openClass = isOpen ? styles.isOpen : '';
        const childrenClass = hasChildren ? styles.hasChildren : '';

        return (
            <li className={`${childrenClass} ${openClass}`}>
                <Link to={link} activeStyle={{ color: '#ffb800' }}>
                    {linkText}
                    {hasChildren && (
                        <button type="button" onClick={toggleMenu.bind(this)}>
                            {(isOpen && <FontAwesomeIcon icon={faMinus} fixedWidth />) || (
                                <FontAwesomeIcon icon={faPlus} fixedWidth />
                            )}
                        </button>
                    )}
                </Link>
                {!!hasChildren && (
                    <section>
                        <h1>{linkText}</h1>
                        <ul>
                            {children.map(({ id, ...item }) => (
                                <MenuItem key={id} {...item} />
                            ))}
                        </ul>
                    </section>
                )}
            </li>
        );
    }
}
