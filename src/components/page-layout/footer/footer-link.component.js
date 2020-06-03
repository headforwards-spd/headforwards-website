import { bool, shape, string } from 'prop-types';
import React from 'react';

import Image, { ImageSrcPropType } from '../image/image.component';
import Link from '../link/link.component';
import Markdown from '../markdown';
import styles from './footer.module.scss';

const footerLinkPropTypes = {
    showImages: bool,
    link: string.isRequired,
    title: string.isRequired,
    summary: shape({
        image: ImageSrcPropType,
        text: string,
    }).isRequired,
};

export default FooterLink;
export const FooterLinkPropType = shape(footerLinkPropTypes);

FooterLink.propTypes = footerLinkPropTypes;

FooterLink.defaultProps = {
    showImages: false,
};

function FooterLink({ showImages, link, title, summary }) {
    const { image, text } = summary;

    return (
        <Link to={link}>
            <section>
                <h2>{title}</h2>
                {showImages && <Image alt={title} image={image} className={styles.footerLinkImage} />}
                <Markdown source={text} truncate maxLength={100} />
                <button type="button">Read more</button>
            </section>
        </Link>
    );
}

export function extractFooterLinks(footerLinks) {
    const [{ title, showImages, link1, link2, link3, page1, page2, page3 } = {}] = footerLinks || [{}];

    if (!(link1 && link2 && link3)) {
        return null;
    }

    const { id: page1Id } = page1;
    const { id: page2Id } = page2;
    const { id: page3Id } = page3;

    return {
        title,
        links: [
            { id: page1Id, link: link1, page: page1 },
            {
                id: page2Id,
                link: link2,
                page: page2,
            },
            {
                id: page3Id,
                link: link3,
                page: page3,
            },
        ].map(({ id, page }) => {
            const { fields, frontmatter } = page || {};
            const { slug } = fields || {};
            const { parent } = frontmatter || {};
            const link = `/${parent || ''}/${slug || ''}/`;

            return {
                id,
                showImages,
                link,
                ...frontmatter,
            };
        }),
    };
}
