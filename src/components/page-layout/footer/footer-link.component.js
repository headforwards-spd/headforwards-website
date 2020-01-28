import { bool, shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image, { ImageSrcPropType } from '../image/image.component';
import Link from '../link/link.component';
import styles from './footer.module.scss';

const footerLinkPropTypes = {
    showImages: bool,
    link: string.isRequired,
    title: string.isRequired,
    image: shape({ image: ImageSrcPropType }).isRequired,
    introduction: shape({ text: string }).isRequired,
};

export default FooterLink;
export const FooterLinkPropType = shape(footerLinkPropTypes);

FooterLink.propTypes = footerLinkPropTypes;

FooterLink.defaultProps = {
    showImages: false,
};

function FooterLink({ showImages, link, title, image, introduction }) {
    const { image: bannerImage } = image || {};
    const { text } = introduction || {};

    return (
        <Link to={link}>
            <section>
                <h2>{title}</h2>
                {showImages && <Image alt={title} image={bannerImage} className={styles.footerLinkImage} />}
                <ReactMarkdown source={text} />
                <button type="button">Read more</button>
            </section>
        </Link>
    );
}

export function extractFooterLinks(footerLinks) {
    const [{ title, showImages, link1, link2, link3, page1, page2, page3 }] = footerLinks || [{}];

    if (!(link1 && link2 && link3)) {
        return null;
    }

    return {
        title,
        links: [
            { link: link1, page: page1 },
            { link: link2, page: page2 },
            { link: link3, page: page3 },
        ].map(({ link, page }) => {
            const { frontmatter } = page || {};

            return {
                showImages,
                link,
                ...frontmatter,
            };
        }),
    };
}
