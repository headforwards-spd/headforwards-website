import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import styles from './info-page.module.scss';

export default InfoPageTemplate;

InfoPageTemplate.propTypes = {
    introduction: shape({
        show: bool,
        text: string,
    }),
    components: arrayOf(PageComponentPropType),
};

InfoPageTemplate.defaultProps = {
    introduction: null,
    components: null,
};

function InfoPageTemplate({ introduction, components = [] }) {
    const { show, text } = introduction;

    return (
        <>
            {show && <IntroductionComponent introduction={text} />}
            {components && (
                <section className={styles.components}>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
