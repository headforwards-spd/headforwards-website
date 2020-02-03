import { Location } from '@reach/router';
import React, { Component } from 'react';

import Link from '../../link/link.component';
import Socials from '../../socials/socials.component';
import Hamburger from '../hamburger/hamburger.component';
import MenuItem from '../menu-item/menu-item.component';
import styles from '../navbar.module.scss';
import { menuPropTypes } from './menu.prop-type';

export default class Menu extends Component {
    static propTypes = menuPropTypes;

    static defaultProps = {
        hasBackground: false,
        activeClass: null,
    };

    render() {
        const { menuClick, hasBackground, activeClass, menu, companyInfo } = this.props;
        const { companyName, phone } = companyInfo;
        const backgroundImg = hasBackground ? 'with-bg' : 'without-bg';

        return (
            <Location>
                {({ location }) => (
                    <>
                        <nav className={`${activeClass} ${styles.menu} ${backgroundImg}`}>
                            <header>
                                <Link to="/">{companyName}</Link>
                                <Hamburger
                                    {...{
                                        activeClass,
                                        onClick: menuClick,
                                    }}
                                />
                            </header>
                            <section>
                                <ul>
                                    <MenuItem
                                        className={styles.navHomeLink}
                                        {...{
                                            id: 'nav-home-link',
                                            showTitle: true,
                                            location,
                                            link: '/',
                                            linkText: 'Home.',
                                            children: [
                                                {
                                                    id: 'nav-home-contact-page-link',
                                                    location,
                                                    link: '/contact',
                                                    linkText: 'Contact',
                                                },
                                            ],
                                        }}
                                    />
                                    {menu.map(({ id, ...item }) => (
                                        <MenuItem
                                            key={id}
                                            {...item}
                                            {...{
                                                location,
                                                showTitle: true,
                                            }}
                                        />
                                    ))}
                                    <MenuItem
                                        className={styles.navContactLink}
                                        {...{
                                            id: 'nav-contact-link',
                                            link: '/contact',
                                            linkText: 'Contact.',
                                            location,
                                        }}
                                    />
                                </ul>
                                <section className={styles.contactDetails}>
                                    <dl>
                                        <dt>Call us.</dt>
                                        <dd>{phone}</dd>
                                    </dl>
                                    <section>
                                        <h2>Follow us.</h2>
                                        <Socials
                                            {...{
                                                ...companyInfo,
                                                activeClass,
                                            }}
                                        />
                                    </section>
                                </section>
                            </section>
                        </nav>
                    </>
                )}
            </Location>
        );
    }
}
