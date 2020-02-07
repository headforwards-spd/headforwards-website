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
            introduction: shape({ text: string }),
            image: shape({ image: ImageSrcPropType }),
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
    const { introduction: introductionObject, image: imageObject } = frontmatter || {};
    const { image } = imageObject || {};
    const { text: introduction } = introductionObject || {};

    const pageLinkProps = {
        link,
        title,
        image,
        introduction,
    };

    return !isPostit ? <IndexArticle {...pageLinkProps} /> : <IndexPostit {...pageLinkProps} />;
}
