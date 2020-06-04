import { arrayOf, bool, oneOf, shape } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Introduction, { IntroductionProps } from '../../page-layout/introduction/introduction.component';
import BlogLink, { BlogLinkPropType } from './blog-link.component';
import styles from './index-page.module.scss';
import PageLink, { PageLinkPropType } from './page-link.component';

IndexPage.propTypes = {
    introduction: shape(IntroductionProps),
    isPostits: bool,
    pages: arrayOf(PageLinkPropType),
    components: arrayOf(oneOf([PageComponentPropType, BlogLinkPropType])),
    isBlog: bool,
};
IndexPage.defaultProps = {
    isPostits: false,
    introduction: null,
    pages: null,
    components: null,
    isBlog: false,
};
export default function IndexPage({ isPostits, introduction, pages, components, isBlog }) {
    const hasArrow = !isBlog && !!pages && pages.length % 2 !== 0;
    const postitClass = isPostits ? styles.postits : '';
    const blogClass = isBlog ? styles.blog : '';

    return (
        <>
            {introduction && <Introduction introduction={introduction} className={styles.intro} />}
            <section className={`${styles.pages} ${postitClass} ${blogClass}`}>
                {!!pages &&
                    pages.map(({ uuid, ...page }) =>
                        !isBlog ? (
                            <PageLink key={uuid} {...page} isPostit={isPostits} />
                        ) : (
                            <BlogLink key={page.id} {...page} />
                        )
                    )}
                {hasArrow && <img src="/images/hf-arrow.svg" alt="arrow" className={styles.page} />}
            </section>
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
