import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import ContentComponent from '../../page-components/content.component';
import { IntroductionProps } from '../../page-layout/introduction/introduction.component';
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
            {introduction && <LegalPageIntroduction introduction={introduction} />}
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

LegalPageIntroduction.propTypes = {
    introduction: shape(IntroductionProps).isRequired,
};
function LegalPageIntroduction({ introduction }) {
    const { title, content } = introduction || {};

    if (!title && !(content || []).length) {
        return null;
    }

    return (
        <>
            {title && <h2>{title}</h2>}
            {content && content.map(({ id, type, ...item }) => <ContentComponent key={id} type={type} {...item} />)}
        </>
    );
}
