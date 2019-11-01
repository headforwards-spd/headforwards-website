import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './socials.module.scss';
import Link from '../../link/link.component';

export default Socials;

Socials.propTypes = {
    activeClass: PropTypes.string,
    twitterURL: PropTypes.string,
    facebookURL: PropTypes.string,
    instagramURL: PropTypes.string,
    linkedInURL: PropTypes.string,
    youtubeURL: PropTypes.string,
    isFooter: PropTypes.bool,
};
Socials.defaultProps = {
    activeClass: '',
    twitterURL: null,
    facebookURL: null,
    instagramURL: null,
    linkedInURL: null,
    youtubeURL: null,
    isFooter: false,
};

function Socials({ activeClass, twitterURL, facebookURL, instagramURL, linkedInURL, youtubeURL, isFooter }) {
    const footerClass = isFooter ? styles.footerSection : styles.headerSection;
    return (
        <ul className={`${activeClass} ${footerClass}`}>
            {!!twitterURL && (
                <li>
                    <Link to={twitterURL}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                </li>
            )}
            {!!facebookURL && (
                <li>
                    <Link to={facebookURL}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </Link>
                </li>
            )}
            {!!instagramURL && (
                <li>
                    <Link to={instagramURL}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
            )}
            {!!linkedInURL && (
                <li>
                    <Link to={linkedInURL}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </li>
            )}
            {!!youtubeURL && (
                <li>
                    <Link to={youtubeURL}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </li>
            )}
        </ul>
    );
}
