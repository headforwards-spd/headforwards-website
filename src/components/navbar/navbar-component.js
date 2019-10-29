import {Link}             from 'gatsby';
import PropTypes          from 'prop-types';
import React, {Component} from 'react';
import {Socials}          from '../socials/socials-component';
import Hamburger          from './hamburger-component'
import styles             from './navbar-component.module.scss';

export default class Navbar extends Component {
    static propTypes = {
        menu:             PropTypes.arrayOf(PropTypes.any),
        hasBackgroundImg: PropTypes.bool,
        company_info:     PropTypes.arrayOf(PropTypes.any)
    };

    state = {
        isOpen: false
    };

    static defaultProps = {
        menu:             [],
        hasBackgroundImg: false,
        company_info:     []
    };

    menuClick = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        const active                                 = this.state.isOpen ? 'is-active' : '';
        const {menuClick}                            = this;
        const {menu, hasBackgroundImg, company_info} = this.props;
        return (
            <Menu {...{
                menuClick,
                hasBackgroundImg,
                active,
                menu,
                company_info
            }} />
        );
    }
}

export function Menu({menuClick, hasBackgroundImg, active, menu, company_info}) {
    const backgroundImg = hasBackgroundImg ? 'with-bg' : 'without-bg';
    return (
        <nav className={`${active} ${styles.navbar} ${backgroundImg}`}>
            <div className="flexRow">
                <Link to="/" className="logo"></Link>
                <Hamburger {...{active, onClick:menuClick}}/>
            </div>
            <ul className={`${active} main-nav`} id="js-menu">
                {menu.map((item, key) => <MenuItem key={key} {...{item}} />)}
            </ul>
            <ul className='socials-section'>
                <li className="socials"><span>Call us.</span></li>
                <li className="socials phone-number"><span>+44 (0)1209 311151</span></li>
                <li className="socials"><span>Follow us.</span></li>
            </ul>
            <Socials {...{...company_info, active}} />
        </nav>
    );

}

export function MenuItem({item}) {
    return (
        <li className="main-list-item">
            <Link className="nav-links" to={item.link} activeStyle={{color: '#ffb800'}}>{item.label}</Link>
            {!!item.children && <ul>
                {item.children.map((item, key) => <MenuItem {...{
                    item,
                    key
                }} />)}
            </ul>}
        </li>
    );
}
