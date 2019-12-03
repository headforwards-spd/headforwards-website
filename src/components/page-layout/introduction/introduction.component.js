import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './introduction.module.scss';

export default IntroductionComponent;

function IntroductionComponent({ introduction }) {
    const [{ title, text } = {}] = introduction || [];

    return text ? (
        <section className={styles.introduction}>
            {title && <h1>{title}</h1>}
            <ReactMarkdown source={text} />
        </section>
    ) : null;
}
