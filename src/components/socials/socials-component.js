import {faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon}                                                   from '@fortawesome/react-fontawesome';
import React                                                               from 'react';
import styles                                                    from './socials-component.module.scss';

export function Socials({active, twitterURL, facebookURL, instaURL, linkedinURL, youtubeURL, isFooter = false}) {
    const footerClass = isFooter ? styles.footerSection : styles.headerSection;
    return (
        <ul className={`${active} ${footerClass}`}>
            <li>
                <a href={twitterURL}>
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
            <li>
                <a href={facebookURL}>
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                </a>
            </li>
            <li>
                <a href={instaURL}>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </li>
            <li>
                <a href={linkedinURL}>
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
            </li>
            <li>
                <a href={youtubeURL}>
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
            </li>

        </ul>
    );
}
