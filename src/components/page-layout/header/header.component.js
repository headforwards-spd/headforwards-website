import parseHtml from 'html-react-parser';
import { arrayOf, bool, string } from 'prop-types';
import React from 'react';

import { CompanyInfoPropType } from '../company-info.prop-type';
import Image, { ImageSrcPropType } from '../image/image.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './header.module.scss';
import StickyNav from './sticky-nav.component';

export default class Header extends StickyNav {
    scrollTop = 0;

    debounceTime = 20;

    debounceScroll = null;

    static propTypes = {
        isHomePage: bool,
        title: string.isRequired,
        subtitle: string,
        image: ImageSrcPropType,
        menu: arrayOf(MenuItemPropType).isRequired,
        companyInfo: CompanyInfoPropType.isRequired,
    };

    static defaultProps = {
        isHomePage: false,
        subtitle: null,
        image: null,
    };

    render() {
        const { isHomePage, title, subtitle, image, menu, companyInfo } = this.props;

        const { publicURL } = image || {};
        const hasBackground = !!image || !!publicURL;
        let headerStyle = hasBackground ? styles.hasBackground : '';

        isHomePage && (headerStyle += ` ${styles.isHomePage}`);

        const titleStyle = subtitle ? styles.hasSubTitle : '';

        const scrollingClass = this.getScrollingClass();

        return (
            <header className={`${styles.header} ${headerStyle} ${scrollingClass}`}>
                <Navbar {...{ menu, companyInfo, hasBackground }} />
                <section className={titleStyle}>
                    <h1>{parseHtml(title)}</h1>
                    {!!subtitle && <p>{subtitle}</p>}
                </section>
                {!!image && <Image image={image} alt={title} className={styles.image} />}
            </header>
        );
    }
}
