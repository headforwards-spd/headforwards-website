import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './legal-page.module.scss';

// const legalPagePropTypes = {
//     introduction: string,
//     privacyData: {},
// };

export default LegalPageTemplate;

// LegalPageTemplate.propTypes = legalPagePropTypes;
//
// LegalPageTemplate.defaultProps = {
//     introduction: null,
//     privacyData: {},
// };

function LegalPageTemplate({ introduction, sections }) {
    const { title, text } = introduction;
    return (
        <section className={styles.sections}>
            {title && <h1>{title}</h1>}
            {text && <ReactMarkdown source={text} />}
            {sections.map(({ id, title, text }) => (
                <section key={id}>
                    {title && <h1>{title}</h1>}
                    <ReactMarkdown source={text} />
                </section>
            ))}
        </section>
    );
}
