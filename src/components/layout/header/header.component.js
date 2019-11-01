import { arrayOf, string } from 'prop-types';
import React from 'react';
import Image, { ImagePropType } from '../../image/image.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './header.module.scss';
import { CompanyInfoPropType } from '../company-info.prop-type';

export default Header;

Header.propTypes = {
    title: string.isRequired,
    text: string,
    image: ImagePropType,
    menu: arrayOf(MenuItemPropType).isRequired,
    companyInfo: CompanyInfoPropType.isRequired,
};
Header.defaultProps = {
    text: null,
    image: null,
};
function Header({ title, text, image, menu, companyInfo }) {
    const { publicURL } = image || {};
    const hasBackground = !!publicURL;
    const headerStyle = hasBackground ? styles.hasBackground : '';

    const titleStyle = text ? styles.hasSubTitle : '';

    return (
        <header className={`${styles.header} ${headerStyle}`}>
            <Navbar {...{ menu, companyInfo, hasBackground }} />
            <section className={titleStyle}>
                <h1>{title}</h1>
                <h2>{text}</h2>
            </section>
            {!!image && <Image image={image} className={styles.image} />}
        </header>
    );
}
