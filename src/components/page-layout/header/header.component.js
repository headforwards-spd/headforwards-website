import { arrayOf, bool, string } from 'prop-types';
import React from 'react';
import parseHtml from 'html-react-parser';
import Image, { ImageSrcPropType } from '../image/image.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './header.module.scss';
import { CompanyInfoPropType } from '../company-info.prop-type';

export default Header;

Header.propTypes = {
    isHomePage: bool,
    title: string.isRequired,
    subtitle: string,
    image: ImageSrcPropType,
    menu: arrayOf(MenuItemPropType).isRequired,
    companyInfo: CompanyInfoPropType.isRequired,
};
Header.defaultProps = {
    isHomePage: false,
    subtitle: null,
    image: null,
};
function Header({ isHomePage, title, subtitle, image, menu, companyInfo }) {
    const { publicURL } = image || {};
    const hasBackground = !!image || !!publicURL;
    let headerStyle = hasBackground ? styles.hasBackground : '';

    isHomePage && (headerStyle += ` ${styles.isHomePage}`);

    const titleStyle = subtitle ? styles.hasSubTitle : '';

    return (
        <header className={`${styles.header} ${headerStyle}`}>
            <Navbar {...{ menu, companyInfo, hasBackground }} />
            <section className={titleStyle}>
                <h1>{parseHtml(title)}</h1>
                {!!subtitle && <p>{subtitle}</p>}
            </section>
            {!!image && <Image image={image} alt={title} className={styles.image} />}
        </header>
    );
}
