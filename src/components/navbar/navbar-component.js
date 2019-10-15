import PropTypes          from 'prop-types';
import React, {Component} from 'react';
import Image              from '../image/image-component';

export default class Navbar extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.any)
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
                <a href={item.link}>{item.label}</a>
                {!!item.children && <ul>
                    {item.children.map(this.buildMenu)}
                </ul>}
            </li>
        );
    };

    render() {
        const {menuClick} = this;
        const {items}     = this.props;
        const active      = this.state.isOpen ? 'is-active' : '';
        return (
            <nav className="navbar">
                <a href="https://www.headforwards.com" className="logo">
                    <Image image="/img/headforwards-full-logo-black.png" alt="Headforwards logo"/>
                </a>
                <ul>
                    {items.map(this.buildMenu)}
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