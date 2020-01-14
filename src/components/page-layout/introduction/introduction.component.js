import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './introduction.module.scss';

export default IntroductionComponent;

IntroductionComponent.propTypes = {
    introduction: string.isRequired,
};

function IntroductionComponent({ introduction }) {
    return introduction ? (
        <section className={styles.introduction}>
            <ReactMarkdown source={introduction} />
        </section>
    ) : null;
}
