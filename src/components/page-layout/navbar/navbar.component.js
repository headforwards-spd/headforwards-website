import React, { Component } from 'react';
import Menu from './menu/menu.component';
import { navbarPropTypes } from './navbar.prop-type';

export default class Navbar extends Component {
    static propTypes = navbarPropTypes;

    static defaultProps = { hasBackground: false };

    state = {
        isOpen: false,
    };

    menuClick = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    render() {
        const { isOpen } = this.state;
        const activeClass = isOpen ? 'is-active' : '';
        const { menuClick } = this;
        const { menu, hasBackground, companyInfo } = this.props;

        const props = {
            menuClick: menuClick.bind(this),
            hasBackground,
            activeClass,
            menu,
            companyInfo,
        };

        return <Menu {...props} />;
    }
}
