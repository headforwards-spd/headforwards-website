import { shape, arrayOf, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './legal-page.module.scss';

const legalPageSectionPropTypes = {
    title: string,
    text: string.isRequired,
};

const legalPagePropTypes = {
    introduction: string,
    sections: arrayOf(
        shape({
            id: string.isRequired,
            ...legalPageSectionPropTypes,
        })
    ),
};

export default LegalPageTemplate;

LegalPageTemplate.propTypes = legalPagePropTypes;

LegalPageTemplate.defaultProps = {
    introduction: null,
    sections: [],
};

function LegalPageTemplate({ introduction, sections }) {
    const [{ title, text } = {}] = introduction || [];
    return (
        <section className={styles.sections}>
            {title && <h2>{title}</h2>}
            {text && <ReactMarkdown source={text} />}
            {sections.map(({ id, ...section }) => (
                <LegalPageSection key={id} {...section} />
            ))}
        </section>
    );
}

LegalPageSection.propTypes = legalPageSectionPropTypes;
LegalPageSection.defaultProps = {
    title: null,
};

function LegalPageSection({ title, text }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ReactMarkdown source={text} />
        </section>
    );
}
