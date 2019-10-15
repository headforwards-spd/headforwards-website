import PropTypes          from 'prop-types';
import React, {Component} from 'react';
import {Link}             from 'gatsby';
import Image              from '../image/image-component';
import {flexRow} from './navbar.scss';

export default class Navbar extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.any)
    };

    state = {
        isOpen: false
    };

    static defaultProps = {
        items: []
    };

    menuClick = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    buildMenu = (item, key) => {
        return (
            <li key={key}>
                <Link className="nav-links" to={item.url}>{item.label}</Link>
                {!!item.children && <ul>
                    {item.children.map(this.buildMenu)}
                </ul>}
            </li>
        );
    };

    render() {
        const {menuClick} = this;
        const {menu}      = this.props;
        const active      = this.state.isOpen ? 'is-active' : '';
        return (
            <nav className={`${active} navbar`}>
                <div className="flexRow">
                    <a href="/" className="logo">
                        <Image image="/img/headforwards-full-logo-black.png" alt="Headforwards logo"/>
                    </a>
                    <button onClick={menuClick} className={`${active} hamburger hamburger--slider`} type="button">
                          <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                          </span>
                    </button>
                </div>
                <ul className={`${active} main-nav`} id="js-menu">
                    {menu.map(this.buildMenu)}
                </ul>
            </nav>
        );
    }
}
