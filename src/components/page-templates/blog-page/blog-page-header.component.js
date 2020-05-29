import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { shape, string } from 'prop-types';
import React from 'react';
import { ImageSrcPropType } from '../../page-layout/image/image.component';

import Author from '../../page-components/author/author.component';
import SocialShare from '../../page-components/social-share/social-share.component';
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

    return (
        <>
            {author && <Author {...author} />}
            <aside className={styles.aside}>
                <time dateTime={publishedDate}>
                    <FontAwesomeIcon icon={faClock} />
                    {publishedDateString}
                </time>
                <SocialShare title={title} />
            </aside>
        </>
    );
}
