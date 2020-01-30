import parseHtml from 'html-react-parser';
import { arrayOf, bool, string } from 'prop-types';
import React, { Component } from 'react';

import { CompanyInfoPropType } from '../company-info.prop-type';
import Image, { ImageSrcPropType } from '../image/image.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './header.module.scss';

export default class Header extends Component {
    scrollTop = 0;

    debounceTime = 15;

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

    state = {
        isScrollingUp: false,
        isScrollingDown: false,
    };

    componentDidMount() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const { debounceTime, debounceScroll } = this;

        debounceScroll && clearTimeout(debounceScroll);
        this.debounceScroll = setTimeout(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isAtTop = scrollTop < 5;
            const isNearTop = scrollTop < 200;

            const { isScrollingUp, isScrollingDown } = this.state;

            const isScrollingUpNext = scrollTop < this.scrollTop && (!isNearTop || isScrollingUp);
            const isScrollingDownNext = scrollTop > this.scrollTop && (!isNearTop || isScrollingDown);

            if (isAtTop && (isScrollingUp || isScrollingDown)) {
                this.setState({ isScrollingUp: false, isScrollingDown: false });
            } else if (isScrollingUp !== isScrollingUpNext || isScrollingDown !== isScrollingDownNext) {
                this.setState({ isScrollingUp: isScrollingUpNext, isScrollingDown: isScrollingDownNext });
            }

            this.scrollTop = scrollTop;
        }, debounceTime);
    }

    render() {
        const { isHomePage, title, subtitle, image, menu, companyInfo } = this.props;

        const { isScrollingUp, isScrollingDown } = this.state;

        const scrollingClass = isScrollingUp ? styles.isScrollingUp : isScrollingDown ? styles.isScrollingDown : '';

        const { publicURL } = image || {};
        const hasBackground = !!image || !!publicURL;
        let headerStyle = hasBackground ? styles.hasBackground : '';

        isHomePage && (headerStyle += ` ${styles.isHomePage}`);

        const titleStyle = subtitle ? styles.hasSubTitle : '';

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
