import React         from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './tandcs.module.scss';

const termsConditionsPropTypes = {
    tcData: {},
};

export default TermsConditionsTemplate;

TermsConditionsTemplate.propTypes = termsConditionsPropTypes;

TermsConditionsTemplate.defaultProps = {
    tcData: {},
};

function TermsConditionsTemplate({ tcData }) {
    const { introduction, sections } = tcData;
    return (
        <section className={styles.termsSection}>
            <ReactMarkdown source={introduction} />
            {sections.map(({ id, ...section }) => (
                <section>
                    <h1>{section.title}</h1>
                    <ReactMarkdown source={section.text} />
                </section>
            ))}
        </section>
    )
}
