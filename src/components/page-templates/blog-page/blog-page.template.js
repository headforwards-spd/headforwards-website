import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';
import styles from './blog-page.module.scss';

import Author from '../../page-components/author/author.component';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import { ImageSrcPropType } from '../../page-layout/image/image.component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';

export default BlogPage;

BlogPage.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }),
    formattedPublishedDate: string,
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
    formattedPublishedDate: null,
    author: null,
};

function BlogPage({ introduction, components = [], author, formattedPublishedDate }) {
    return (
        <>
            {author && <Author {...author} />}
            {formattedPublishedDate && (
                <section>
                    <p>{formattedPublishedDate}</p>
                </section>
            )}
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
