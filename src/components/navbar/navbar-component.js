import PropTypes          from 'prop-types';
import React, {Component} from 'react';
import { Link } from "gatsby"
import Image              from '../image/image-component';

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
                <Link to={item.url}>{item.label}</Link>
                {!!item.children && <ul>
                    {item.children.map(this.buildMenu)}
                </ul>}
            </li>
        );
    };

    render() {
        const {menuClick} = this;
        const {menu}     = this.props;
        const active      = this.state.isOpen ? 'is-active' : '';
        return (
            <nav className="navbar">
                <a href="/" className="logo">
                    <Image image="/img/headforwards-full-logo-black.png" alt="Headforwards logo"/>
                </a>
                <ul>
                    {menu.map(this.buildMenu)}
                    <li onClick={menuClick}>
                        <button className={`${active} hamburger hamburger--slider`} type="button">
                          <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                          </span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}
