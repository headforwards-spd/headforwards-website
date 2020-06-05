import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../lib/hash-array';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import { ImageSrcPropType } from '../../page-layout/image/image.component';
import Introduction, { IntroductionProps } from '../../page-layout/introduction/introduction.component';
import BlogPageHeader from './blog-page-header.component';
import styles from './blog-page.module.scss';

export default BlogPage;

BlogPage.propTypes = {
    title: string.isRequired,
    introduction: shape(IntroductionProps),
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
    const isIntro = !introduction;

    const hashedComponents = useMemo(() => (components ? hashArray(components) : components), [components]);

    return (
        <>
            <BlogPageHeader {...headerProps} />
            {introduction && <Introduction introduction={introduction} className={styles.intro} />}
            {hashedComponents && (
                <section>
                    {hashedComponents.map(({ id, ...component }) => (
                        <PageComponent key={id} {...component} isIntro={isIntro} />
                    ))}
                </section>
            )}
        </>
    );
}
