import { Component } from 'react';

import styles from './sticky-nav.module.scss';

export default class StickyNav extends Component {
    scrollTop = 0;

    debounceTime = 15;

    debounceScroll = null;

    state = {
        isScrollingUp: false,
        isScrollingDown: false,
    };

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
        const { debounceScroll } = this;

        debounceScroll && clearTimeout(debounceScroll);
    }

    getScrollingClass() {
        const { isScrollingUp, isScrollingDown } = this.state;

        switch (true) {
            case isScrollingUp:
                return styles.isScrollingUp;
            case isScrollingDown:
                return styles.isScrollingDown;
            default:
                return '';
        }
    }

    handleScroll() {
        const { debounceTime, debounceScroll } = this;

        debounceScroll && clearTimeout(debounceScroll);
        this.debounceScroll = setTimeout(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isAtTop = scrollTop < 2;
            const isNearTop = scrollTop < 250;

            const { isScrollingUp, isScrollingDown } = this.state;

            const isScrollingUpNext = scrollTop < this.scrollTop && (!isNearTop || isScrollingUp);
            const isScrollingDownNext = scrollTop > this.scrollTop && (!isNearTop || isScrollingDown);

            switch (true) {
                case scrollTop === this.scrollTop:
                    // do nothing
                    break;
                case isAtTop && (isScrollingUp || isScrollingDown):
                    this.setState({ isScrollingUp: false, isScrollingDown: false });
                    break;
                case isScrollingUp !== isScrollingUpNext:
                case isScrollingDown !== isScrollingDownNext:
                    this.setState({ isScrollingUp: isScrollingUpNext, isScrollingDown: isScrollingDownNext });
                    break;
                default:
                // do nothing
            }

            this.scrollTop = scrollTop;
        }, debounceTime);
    }
}
