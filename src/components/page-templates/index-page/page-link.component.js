import { bool, shape, string } from 'prop-types';
import React from 'react';

import { ImageSrcPropType } from '../../page-layout/image/image.component';
import IndexArticle from './index-article.component';
import IndexPostit from './index-postit.component';

const pageLinkPropTypes = {
    link: string,
    linkText: string,
    page: shape({
        frontmatter: shape({
            summary: shape({
                image: ImageSrcPropType,
                text: string,
            }),
        }),
    }),
    isPostit: bool,
};

export default PageLink;
export const PageLinkPropType = shape(pageLinkPropTypes);

PageLink.propTypes = pageLinkPropTypes;
PageLink.defaultProps = {
    link: '',
    linkText: '',
    page: null,
    isPostit: false,
};

function PageLink({ isPostit, linkText: title, link: page }) {
    const { fields, frontmatter } = page || {};
    const { link } = fields;
    const { summary } = frontmatter || {};
    const { text } = summary;
    const pageLinkProps = {
        link,
        title,
        summary: { text, image: getImage(summary) },
    };

    return !isPostit ? <IndexArticle {...pageLinkProps} /> : <IndexPostit {...pageLinkProps} />;
}

function getImage({ imageMobile, imageTablet, imageDesktop }) {
    const { publicURL, extension } = imageMobile || {};

    if (!publicURL || extension === 'svg') {
        return null;
    }

    return {
        publicURL,
        extension,
        childImageSharp: {
            fluid: [
                { ...imageMobile.childImageSharp.fluid, media: `(max-width: 767px)` },
                { ...imageTablet.childImageSharp.fluid, media: `(min-width: 768px) and (max-width: 1023px)` },
                { ...imageDesktop.childImageSharp.fluid, media: `(min-width: 1024px)` },
            ],
        },
    };
}
