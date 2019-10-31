import React     from 'react'
import Link      from '../../link/link.component'
import Socials   from '../socials/socials.component'
import Hamburger from './hamburger.component'
import MenuItem  from './menu-item.component'
import styles    from './navbar.module.scss'

export default Menu;

function Menu({menuClick, hasBackground, activeClass, menu, companyInfo}) {

    const {phone} = companyInfo;

    const backgroundImg = hasBackground ? 'with-bg' : 'without-bg';

    return (
        <nav className={`${activeClass} ${styles.menu} ${backgroundImg}`}>
            <header>
                <Link to="/">Headforwards</Link>
                <Hamburger {...{activeClass, onClick:menuClick}}/>
            </header>
            <section>
                <ul id="js-menu">{menu.map((item, key) => <MenuItem key={key} {...item} />)}</ul>
                <section className={styles.contactDetails}>
                    <dl>
                        <dt>Call us.</dt>
                        <dd>{phone}</dd>
                    </dl>
                    <section>
                        <h1>Follow us.</h1>
                        <Socials {...{...companyInfo, activeClass}} />
                    </section>
                </section>
            </section>
        </nav>
    );

}
