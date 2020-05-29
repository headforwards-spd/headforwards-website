import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import Markdown from '../../page-layout/markdown';
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

export default LegalPage;

LegalPage.propTypes = legalPagePropTypes;

LegalPage.defaultProps = {
    introduction: null,
    sections: [],
};

function LegalPage({ introduction, sections }) {
    return (
        <section className={styles.sections}>
            {introduction && (
                <section>
                    <Markdown source={introduction} />
                </section>
            )}
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
            <Markdown source={text} />
        </section>
    );
}
