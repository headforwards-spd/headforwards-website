import { shape, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './introduction.module.scss';

const introductionComponentPropTypes = {
    title: string,
    text: string.isRequired,
};

export default IntroductionComponent;
export const IntroductionComponentPropType = shape(introductionComponentPropTypes);

IntroductionComponent.propTypes = introductionComponentPropTypes;
IntroductionComponent.defaultProps = {
    title: null,
};

function IntroductionComponent({ title, text }) {
    return text ? (
        <section className={styles.introduction}>
            {title && <h1>{title}</h1>}
            <ReactMarkdown source={text} />
        </section>
    ) : null;
}
