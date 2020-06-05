import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../lib/hash-array';
import ContentComponent from '../../page-components/content.component';
import { IntroductionProps } from '../../page-layout/introduction/introduction.component';
import Markdown from '../../page-layout/markdown';
import styles from './legal-page.module.scss';

const legalPageSectionPropTypes = {
    title: string,
    text: string.isRequired,
};

const legalPagePropTypes = {
    introduction: shape(IntroductionProps),
    sections: arrayOf(
        shape({
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
    const hashedSections = useMemo(() => (sections ? hashArray(sections) : sections), [sections]);

    return (
        <section className={styles.sections}>
            {introduction && <LegalPageIntroduction introduction={introduction} />}
            {hashedSections.map(({ id, ...section }) => (
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

LegalPageIntroduction.propTypes = {
    introduction: shape(IntroductionProps).isRequired,
};
function LegalPageIntroduction({ introduction }) {
    const { title, content } = introduction || {};

    if (!title && !(content || []).length) {
        return null;
    }

    const hashedContent = useMemo(() => (content ? hashArray(content) : content), [content]);

    return (
        <>
            {title && <h2>{title}</h2>}
            {hashedContent &&
                hashedContent.map(({ id, type, ...item }) => <ContentComponent key={id} type={type} {...item} />)}
        </>
    );
}
