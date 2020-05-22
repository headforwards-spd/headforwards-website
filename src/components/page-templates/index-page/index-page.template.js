import { arrayOf, bool, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import styles from './index-page.module.scss';
import PageLink, { PageLinkPropType } from './page-link.component';

IndexPage.propTypes = {
    introduction: string,
    isPostits: bool,
    pages: arrayOf(PageLinkPropType),
    components: arrayOf(PageComponentPropType),
};
IndexPage.defaultProps = {
    isPostits: false,
    introduction: null,
    pages: null,
    components: null,
};
export default function IndexPage({ isPostits, introduction, pages, components }) {
    const hasArrow = !!pages && pages.length % 2 !== 0;
    const postitClass = isPostits ? styles.postits : '';

    return (
        <>
            {introduction && <IntroductionComponent introduction={introduction} />}
            <section className={`${styles.pages} ${postitClass}`}>
                {!!pages && pages.map(({ uuid, ...page }) => <PageLink key={uuid} {...page} isPostit={isPostits} />)}
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
