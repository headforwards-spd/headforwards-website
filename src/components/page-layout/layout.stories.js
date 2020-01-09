import { withKnobs } from '@storybook/addon-knobs';
import { string } from 'prop-types';
import React from 'react';

import styles from './layout.stories.modules.scss';

const faker = require('faker');

const testText = `The quick brown fox jumps over the lazy dog. $123.45!`;

export default {
    title: 'Page Layout/Typography',
    decorators: [withKnobs],
};

export const Colours = () => {
    return (
        <dl className={styles.colours}>
            <dt className={styles.orange1} />
            <dd>Orange 1 (#ffb900)</dd>
            <dt className={styles.orange2} />
            <dd>Orange 2 (#ffcc55)</dd>
            <dt className={styles.blue1} />
            <dd>Blue 1 (#141122)</dd>
            <dt className={styles.blue2} />
            <dd>Blue 2 (#1D1F32)</dd>
            <dt className={styles.grey1} />
            <dd>Grey 1 (#383F51)</dd>
            <dt className={styles.grey2} />
            <dd>Grey 2 (#4A4A4A)</dd>
            <dt className={styles.grey3} />
            <dd>Grey 3 (#4D4D4D)</dd>
            <dt className={styles.grey4} />
            <dd>Grey 4 (#6E7087)</dd>
            <dt className={styles.grey5} />
            <dd>Grey 5 (#b4b4b5)</dd>
            <dt className={styles.grey6} />
            <dd>Grey 6 (#B8B8B8)</dd>
            <dt className={styles.grey7} />
            <dd>Grey 7 (#c3c3c3)</dd>
            <dt className={styles.grey8} />
            <dd>Grey 8 (#d7d7d6)</dd>
            <dt className={styles.grey9} />
            <dd>Grey 9 (#D8D8D8)</dd>
            <dt className={styles.grey10} />
            <dd>Grey 10 (#eeeeee)</dd>
        </dl>
    );
};

export const Headings = () => {
    const title = testText;

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.xxxlarge}>XXXLarge: {title}</h2>
            <h2 className={`${styles.xxxlarge} ${styles.fsAlbertWeb}`}>XXXLarge: {title}</h2>
            <h2 className={styles.xxlarge}>XXLarge: {title}</h2>
            <h2 className={`${styles.xxlarge} ${styles.fsAlbertWeb}`}>XXLarge: {title}</h2>
            <h2 className={styles.xlarge}>XLarge: {title}</h2>
            <h2 className={`${styles.xlarge} ${styles.fsAlbertWeb}`}>XLarge: {title}</h2>
            <h2 className={styles.large}>Large: {title}</h2>
            <h2 className={`${styles.large} ${styles.fsAlbertWeb}`}>Large: {title}</h2>
            <h2 className={styles.medium}>Medium: {title}</h2>
            <h2 className={`${styles.medium} ${styles.fsAlbertWeb}`}>Medium: {title}</h2>
            <h2 className={styles.small}>Small: {title}</h2>
            <h2 className={`${styles.small} ${styles.fsAlbertWeb}`}>Small: {title}</h2>
        </section>
    );
};

export const Paragraphs = () => {
    const copy = faker.lorem.paragraph();

    return (
        <section className={styles.wrapper}>
            <p className={styles.xxlarge}>XXLarge: {copy}</p>
            <p className={`${styles.xxlarge} ${styles.fsAlbertWeb}`}>XXLarge: {copy}</p>
            <p className={styles.xlarge}>XLarge: {copy}</p>
            <p className={`${styles.xlarge} ${styles.fsAlbertWeb}`}>XLarge: {copy}</p>
            <p className={styles.large}>Large: {copy}</p>
            <p className={`${styles.large} ${styles.fsAlbertWeb}`}>Large: {copy}</p>
            <p className={styles.medium}>Medium: {copy}</p>
            <p className={`${styles.medium} ${styles.fsAlbertWeb}`}>Medium: {copy}</p>
            <p className={styles.small}>Small: {copy}</p>
            <p className={`${styles.small} ${styles.fsAlbertWeb}`}>Small: {copy}</p>
        </section>
    );
};

export const SmallCopy = () => {
    const className = styles.wrapper;
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');
    const largeHeadingClass = styles.medium;
    const headingClass = styles.small;
    const copyClass = styles.small;

    return (
        <>
            <Section {...{ className, heading, headingClass, copy, copyClass }} />
            <Section {...{ className, heading, headingClass: largeHeadingClass, copy, copyClass }} />
        </>
    );
};

export const MediumCopy = () => {
    const className = styles.wrapper;
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');
    const largeHeadingClass = styles.large;
    const headingClass = styles.medium;
    const copyClass = styles.medium;

    return (
        <>
            <Section {...{ className, heading, headingClass, copy, copyClass }} />
            <Section {...{ className, heading, headingClass: largeHeadingClass, copy, copyClass }} />
        </>
    );
};

export const LargeCopy = () => {
    const className = styles.wrapper;
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');
    const largeHeadingClass = styles.xlarge;
    const headingClass = styles.large;
    const copyClass = styles.large;

    return (
        <>
            <Section {...{ className, heading, headingClass, copy, copyClass }} />
            <Section {...{ className, heading, headingClass: largeHeadingClass, copy, copyClass }} />
        </>
    );
};

export const XLargeCopy = () => {
    const className = styles.wrapper;
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');
    const largeHeadingClass = styles.xxlarge;
    const headingClass = styles.xlarge;
    const copyClass = styles.xLarge;

    return (
        <>
            <Section {...{ className, heading, headingClass, copy, copyClass }} />
            <Section {...{ className, heading, headingClass: largeHeadingClass, copy, copyClass }} />
        </>
    );
};

export const XXLargeCopy = () => {
    const className = styles.wrapper;
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');
    const largeHeadingClass = styles.xxxlarge;
    const headingClass = styles.xxlarge;
    const copyClass = styles.xxLarge;

    return (
        <>
            <Section {...{ className, heading, headingClass, copy, copyClass }} />
            <Section {...{ className, heading, headingClass: largeHeadingClass, copy, copyClass }} />
        </>
    );
};

Heading.propTypes = {
    text: string,
    className: string,
};
Heading.defaultProps = {
    text: testText,
    className: '',
};
function Heading({ text, className }) {
    return <h2 className={className}>{text}</h2>;
}

Paragraph.propTypes = {
    text: string,
    className: string,
};
Paragraph.defaultProps = {
    text: testText,
    className: '',
};
function Paragraph({ text, className }) {
    return <p className={className}>{text}</p>;
}

Section.propTypes = {
    className: string,
    heading: string,
    headingClass: string,
    copy: string,
    copyClass: string,
};
Section.defaultProps = {
    className: '',
    heading: testText,
    headingClass: '',
    copy: testText,
    copyClass: '',
};
function Section({ className, heading, headingClass, copy, copyClass }) {
    return (
        <section className={className}>
            <h2 className={headingClass}>{heading}</h2>
            {copy.map(paragraph => (
                <p className={copyClass}>{paragraph}</p>
            ))}
        </section>
    );
}
