import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import styles from './index-page.module.scss';
import PageLink, { PageLinkPropType } from './page-link.component';

IndexPageTemplate.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }).isRequired,
    pages: arrayOf(PageLinkPropType),
    components: arrayOf(PageComponentPropType),
};
IndexPageTemplate.defaultProps = {
    pages: null,
    components: null,
};
export default function IndexPageTemplate({ introduction, pages, components }) {
    const { show, text } = introduction || {};

    const hasArrow = !!pages && pages.length % 2 !== 0;

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            <section className={styles.pages}>
                {!!pages && pages.map(page => <PageLink {...page} />)}
                {hasArrow && <img src="/images/hf-arrow.svg" alt="arrow" className={styles.page} />}
            </section>
            {components && (
                <section className={styles.components}>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
