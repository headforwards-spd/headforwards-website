import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { shape, string } from 'prop-types';
import React from 'react';

import Author from '../../page-components/author/author.component';
import SocialShare from '../../page-components/social-share/social-share.component';
import { ImageSrcPropType } from '../../page-layout/image/image.component';
import styles from './blog-page-header.module.scss';

export const BlogPageHeaderProps = {
    title: string.isRequired,
    author: shape({
        uuid: string,
        name: string,
        profilePic: ImageSrcPropType,
        bio: string,
    }).isRequired,
    publishedDate: string.isRequired,
};
export default BlogPageHeader;

BlogPageHeader.propTypes = BlogPageHeaderProps;
BlogPageHeader.defaultProps = {};

function BlogPageHeader({ title, author, publishedDate }) {
    const publishedDateString = moment(publishedDate).format('Do MMMM YYYY');
    const profilePic = getProfilePic(author);

    return (
        <>
            {author && <Author {...author} profilePic={profilePic} />}
            <aside className={styles.aside}>
                <time dateTime={publishedDate}>
                    <Icon icon={faClock} />
                    {publishedDateString}
                </time>
                <SocialShare title={title} />
            </aside>
        </>
    );
}

function getProfilePic({ imageMobile, imageTablet, imageDesktop }) {
    const { publicURL, extension } = imageMobile;

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
