import { shape, arrayOf, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
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
    return (
        <section className={styles.sections}>
            <IntroductionComponent introduction={introduction} />
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
