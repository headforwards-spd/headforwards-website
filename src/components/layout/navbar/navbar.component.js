import PropTypes          from 'prop-types';
import React, {Component} from 'react';
import Menu               from './menu.component'

export default class Navbar extends Component {

    static propTypes = {
        menu:          PropTypes.arrayOf(PropTypes.any),
        hasBackground: PropTypes.bool,
        companyInfo:   PropTypes.object
    };

    state = {
        isOpen: false
    };

    static defaultProps = {
        menu:             [],
        hasBackground: false,
        companyInfo:     []
    };

    menuClick = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        const {isOpen} = this.state;
        const activeClass = isOpen ? 'is-active' : '';
        const {menuClick} = this;
        const {menu, hasBackground, companyInfo} = this.props;

        const props = {
            menuClick: menuClick.bind(this),
            hasBackground,
            activeClass,
            menu,
            companyInfo
        };

        return <Menu {...props} />;
    }
}


