import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';

export default BlogPage;

BlogPage.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }),
    components: arrayOf(PageComponentPropType),
};

BlogPage.defaultProps = {
    introduction: null,
    components: null,
};

function BlogPage({ introduction, components = [] }) {
    const { show, text } = introduction;

    return (
        <>
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
