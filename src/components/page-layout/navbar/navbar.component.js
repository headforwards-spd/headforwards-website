import withUnstated from '@airship/with-unstated';
import React, { Component } from 'react';

import AppContainer from '../../../containers/app.container';
import Menu from './menu/menu.component';
import { navbarPropTypes } from './navbar.prop-type';

class Navbar extends Component {
    static propTypes = navbarPropTypes;

    static defaultProps = {
        hasBackground: false,
    };

    menuClick() {
        const { appContainer } = this.props;
        const { setMenuIsOpen, state } = appContainer;
        const { menuIsOpen } = state;

        setMenuIsOpen(!menuIsOpen);
    }

    render() {
        const { appContainer } = this.props;
        const { menuIsOpen } = appContainer.state;
        const activeClass = menuIsOpen ? 'is-active' : '';
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

export default withUnstated(Navbar, { appContainer: AppContainer });
