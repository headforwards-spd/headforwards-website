import { faFacebookSquare, faLinkedin, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string } from 'prop-types';
import React from 'react';

import Link from '../../page-layout/link/link.component';
import styles from './social-share.module.scss';

export const SocialShareProps = {
    title: string,
    url: string,
};
export default SocialShare;

SocialShare.propTypes = SocialShareProps;
SocialShare.defaultProps = {
    title: null,
    url: null,
};
function SocialShare({ title, url }) {
    const currentPage = encodeURI(url || window.location.href);
    const linkTitle = title ? encodeURI(title) : null;
    const handleClick = (event, name, link, popup) => {
        if (!popup) {
            return;
        }
        event.preventDefault();
        const [width, height] = popup;
        window.open(link, name, `toolbar=0,status=0,width=${width},height=${height}`);
    };

    const links = [
        {
            icon: faLinkedin,
            name: 'LinkedIn',
            popup: [600, 600],
            link: [
                `https://www.linkedin.com/shareArticle/?`,
                `&url=${currentPage}`,
                linkTitle ? `&title=${linkTitle}` : '',
            ].join(''),
        },
        {
            icon: faTwitterSquare,
            name: 'Twitter',
            popup: [600, 300],
            link: [`https://twitter.com/share?`, `&url=${currentPage}`, linkTitle ? `&text=${linkTitle}` : ''].join(''),
        },
        {
            icon: faFacebookSquare,
            name: 'Facebook',
            popup: [600, 100],
            link: [`https://www.facebook.com/sharer/sharer.php?`, `&u=${currentPage}`].join(''),
        },
        {
            icon: faWhatsappSquare,
            name: 'Whatsapp',
            popup: [600, 500],
            link: [
                `https://api.whatsapp.com/send?`,
                `&text=`,
                linkTitle ? `${linkTitle}${encodeURI(`\n\n`)}` : '',
                currentPage,
            ].join(''),
        },
        {
            icon: faEnvelopeSquare,
            name: 'Email',
            popup: null,
            link: [
                `mailto:?`,
                linkTitle ? `&subject=${linkTitle}` : '',
                `&body=`,
                linkTitle ? `${linkTitle}${encodeURI(`\n\n`)}` : '',
                currentPage,
            ].join(''),
        },
    ];

    return (
        <nav className={styles.socialShare}>
            Share:
            {links.map(({ icon, name, link, popup }) => (
                <Link
                    key={name}
                    aria-label={`Share to ${name}`}
                    title={`Share to ${name}`}
                    to={link}
                    onClick={event => handleClick(event, name, link, popup)}
                >
                    <FontAwesomeIcon icon={icon} />
                </Link>
            ))}
        </nav>
    );
}
