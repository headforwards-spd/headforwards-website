import parseHtml from 'html-react-parser';
import { arrayOf, shape, string } from 'prop-types';
import React, { Component } from 'react';

import { CompanyInfoPropType } from '../company-info.prop-type';
import Link from '../link/link.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './job-header.module.scss';

export default class JobHeader extends Component {
    scrollTop = 0;

    debounceTime = 15;

    debounceScroll = null;

    static propTypes = {
        title: string.isRequired,
        subtitle: string,
        jobDetails: shape({
            salary: string.isRequired,
            tags: arrayOf(string).isRequired,
            path: string.isRequired,
        }),
        menu: arrayOf(MenuItemPropType).isRequired,
        companyInfo: CompanyInfoPropType.isRequired,
    };

    static defaultProps = {
        subtitle: null,
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
        const { title, subtitle, jobDetails, menu, companyInfo } = this.props;
        const navBarProps = {
            menu,
            companyInfo,
            hasBackground: false,
        };

        const { isScrollingUp, isScrollingDown } = this.state;

        const scrollingClass = isScrollingUp ? styles.isScrollingUp : isScrollingDown ? styles.isScrollingDown : '';

        const { salary, tags, path } = jobDetails;

        return (
            <header className={`${styles.jobHeader} ${scrollingClass}`}>
                <Navbar {...navBarProps} />
                <section>
                    <section>
                        <h1>{parseHtml(title)}</h1>
                        <p>{subtitle}</p>
                    </section>
                    <section className={styles.jobDetails}>
                        <dl>
                            <dt>Salary</dt>
                            <dd>{salary}</dd>
                            <dt>Tags</dt>
                            <dd>{tags.join(', ')}</dd>
                        </dl>
                        <Link to={`${path}/application-form/`}>Apply Online</Link>
                    </section>
                </section>
            </header>
        );
    }
}
