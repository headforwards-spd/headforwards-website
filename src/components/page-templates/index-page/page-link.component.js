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

function PageLink({ isPostit, link, linkText: title, page }) {
    const { frontmatter } = page || {};
    const { summary } = frontmatter || {};
    const pageLinkProps = {
        link,
        title,
        summary,
    };

    return !isPostit ? <IndexArticle {...pageLinkProps} /> : <IndexPostit {...pageLinkProps} />;
}
