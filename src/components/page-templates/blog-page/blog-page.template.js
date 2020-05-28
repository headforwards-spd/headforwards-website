import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import { ImageSrcPropType } from '../../page-layout/image/image.component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import BlogPageHeader from './blog-page-header.component';
import styles from './blog-page.module.scss';

export default BlogPage;

BlogPage.propTypes = {
    title: string.isRequired,
    introduction: shape({
        show: bool,
        text: string,
    }),
    publishedDate: string,
    components: arrayOf(PageComponentPropType),
    author: shape({
        uuid: string,
        name: string,
        profilePic: ImageSrcPropType,
        bio: string,
    }),
};

BlogPage.defaultProps = {
    introduction: null,
    components: null,
    publishedDate: null,
    author: null,
};

function BlogPage({ title, introduction, components = [], author, publishedDate }) {
    const headerProps = {
        title,
        author,
        publishedDate,
    };
    return (
        <>
            <BlogPageHeader {...headerProps} />
            {introduction && <IntroductionComponent introduction={introduction} className={styles.intro} />}
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
