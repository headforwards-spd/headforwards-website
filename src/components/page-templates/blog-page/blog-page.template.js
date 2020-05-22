import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

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
    // publishedDate: string,
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
    // publishedDate: null,
    author: null,
};

function BlogPage({ introduction, components = [], author, publishedDate }) {
    const { show, text } = introduction;
    return (
        <>
            {author && <Author {...author} />}
            {show && <IntroductionComponent introduction={text} />}
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
