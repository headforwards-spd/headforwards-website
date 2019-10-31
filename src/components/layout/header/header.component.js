import React                                               from 'react';
import Image                                               from '../../image/image.component';
import Navbar                                              from '../navbar/navbar.component';
import styles from './header.module.scss';

export default function Header({title, text, image, menu, companyInfo}) {

    const {publicURL} = image || {};
    const hasBackground = !!publicURL;
    const headerStyle = hasBackground ? styles.hasBackground : '';

    const titleStyle = !!text ? styles.hasSubTitle : '';

    return (
        <header className={`${styles.header} ${headerStyle}`}>
            <Navbar {...{menu, companyInfo, hasBackground}} />
            <section className={titleStyle}>
                <h1>{title}</h1>
                <h2>{text}</h2>
            </section>
            {!!image && <Image image={image} className={styles.image} />}
        </header>
    );
}
