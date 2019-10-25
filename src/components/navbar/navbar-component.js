import {faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon}                                                   from '@fortawesome/react-fontawesome';
import {Link}                                                              from 'gatsby';
import PropTypes                                                           from 'prop-types';
import React, {Component}                                                  from 'react';

export default class Navbar extends Component {
    static propTypes = {
        menu:  PropTypes.arrayOf(PropTypes.any),
        hasBackgroundImg: PropTypes.bool
    };

    state = {
        isOpen: false
    };

    static defaultProps = {
        menu:  [],
        hasBackgroundImg: false
    };

    menuClick = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        const active        = this.state.isOpen ? 'is-active' : '';
        const {menuClick}   = this;
        const {menu, hasBackgroundImg} = this.props;

        return (
            <Menu {...{
                menuClick,
                hasBackgroundImg,
                active,
                menu
            }} />
        );
    }
}

export function Menu({menuClick, hasBackgroundImg, active, menu}) {
    const backgroundImg = hasBackgroundImg ? 'with-bg' : 'without-bg';
    return (
        <nav className={`${active} navbar ${backgroundImg}`}>
            <div className="flexRow">
                <Link to="/" className="logo"></Link>
                <button onClick={menuClick} className={`${active} hamburger hamburger--slider`} type="button">
                          <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                          </span>
                </button>
            </div>
            <ul className={`${active} main-nav`} id="js-menu">
                {menu.map((item, key) => <MenuItem key={key} {...{item}} />)}
            </ul>
            <ul className="socials-section">
                <li className="socials"><span>Call us.</span></li>
                <li className="socials phone-number"><span>+44 (0)1209 311151</span></li>
                <li className="socials"><span>Follow us.</span></li>
                <ul className="socials-list">
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    </li>
                    <li>
                        <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
                    </li>
                </ul>
            </ul>

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
