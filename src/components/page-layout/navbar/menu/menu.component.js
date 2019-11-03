import React from 'react';
import Link from '../../../link/link.component';
import Socials from '../../socials/socials.component';
import Hamburger from '../hamburger/hamburger.component';
import MenuItem from '../menu-item/menu-item.component';
import styles from '../navbar.module.scss';
import { menuPropTypes } from './menu.prop-type';

export default Menu;

Menu.propTypes = menuPropTypes;
Menu.defaultProps = {
    hasBackground: false,
    activeClass: null,
};
function Menu({ menuClick, hasBackground, activeClass, menu, companyInfo }) {
    const { companyName, phone } = companyInfo;

    const backgroundImg = hasBackground ? 'with-bg' : 'without-bg';

    return (
        <nav className={`${activeClass} ${styles.menu} ${backgroundImg}`}>
            <header>
                <Link to="/">{companyName}</Link>
                <Hamburger {...{ activeClass, onClick: menuClick }} />
            </header>
            <section>
                <ul>
                    {menu.map(({ id, ...item }) => (
                        <MenuItem key={id} {...item} />
                    ))}
                </ul>
                <section className={styles.contactDetails}>
                    <dl>
                        <dt>Call us.</dt>
                        <dd>{phone}</dd>
                    </dl>
                    <section>
                        <h1>Follow us.</h1>
                        <Socials {...{ ...companyInfo, activeClass }} />
                    </section>
                </section>
            </section>
        </nav>
    );
}
