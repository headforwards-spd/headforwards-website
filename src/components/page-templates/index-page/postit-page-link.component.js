import { shape, string } from 'prop-types';
import React from 'react';

import Markdown from '../../page-components/markdown';
import Postit from '../../page-components/postit/postit.component';
import Link from '../../page-layout/link/link.component';
import styles from '../teams-and-tech/jobs-page.module.scss';

const postitPageLinkPropTypes = {
    title: string.isRequired,
    link: string.isRequired,
    page: shape({
        frontmatter: shape({
            introduction: string.isRequired,
        }),
    }).isRequired,
};

export default PostitPageLink;
export const PostitPageLinkPropType = shape(postitPageLinkPropTypes);

PostitPageLink.propTypes = postitPageLinkPropTypes;

function PostitPageLink({ title, link, page }) {
    const { frontmatter } = page || {};
    const { introduction } = frontmatter;

    return (
        <Postit className={styles.role}>
            <Link to={link}>
                <h2>{title}</h2>
                <Markdown source={introduction} />
                <div className={styles.link}>Read more</div>
            </Link>
        </Postit>
    );
}
