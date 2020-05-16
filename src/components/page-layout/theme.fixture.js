import faker from 'faker/locale/en_GB';
import { string } from 'prop-types';
import React from 'react';

import FixtureLayout from './FixtureLayout';
import styles from './theme.modules.scss';

export default {
    Colours: Colours,
    Headings: Headings,
    Paragraphs: Paragraphs,
    'Small Copy': SmallCopy,
    'Medium Copy': MediumCopy,
    'Large Copy': LargeCopy,
    'Extra Large Copy': XLargeCopy,
    '2X Large Copy': XXLargeCopy,
};

const testText = `The quick brown fox jumps over the lazy dog. $123.45!`;

function Colours() {
    return (
        <FixtureLayout>
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
                <dt className={styles.grey11} />
                <dd>Grey 11 (#d6d7da)</dd>
            </dl>
        </FixtureLayout>
    );
}

function Headings() {
    const title = testText;

    return (
        <FixtureLayout>
            <section className={styles.wrapper}>
                <h2 className={styles.xxxl}>XXXLarge: {title}</h2>
                <h2 className={styles.xxl}>XXLarge: {title}</h2>
                <h2 className={styles.xl}>XLarge: {title}</h2>
                <h2 className={styles.lg}>Large: {title}</h2>
                <h2 className={styles.md}>Medium: {title}</h2>
                <h2 className={styles.sm}>Small: {title}</h2>
            </section>
        </FixtureLayout>
    );
}

function Paragraphs() {
    const copy = faker.lorem.paragraph();

    return (
        <FixtureLayout>
            <section className={styles.wrapper}>
                <p className={styles.xxl}>XXLarge: {copy}</p>
                <p className={styles.xl}>XLarge: {copy}</p>
                <p className={styles.lg}>Large: {copy}</p>
                <p className={styles.md}>Medium: {copy}</p>
                <p className={styles.sm}>Small: {copy}</p>
            </section>
        </FixtureLayout>
    );
}

function SmallCopy() {
    const className = `${styles.wrapper} ${styles.sm}`;

    return <CopySection className={className} />;
}

function MediumCopy() {
    const className = `${styles.wrapper} ${styles.md}`;

    return <CopySection className={className} />;
}

function LargeCopy() {
    const className = `${styles.wrapper} ${styles.lg}`;

    return <CopySection className={className} />;
}

function XLargeCopy() {
    const className = `${styles.wrapper} ${styles.xl}`;

    return <CopySection className={className} />;
}

function XXLargeCopy() {
    const className = `${styles.wrapper} ${styles.xxl}`;

    return <CopySection className={className} />;
}

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
    copy: string,
};
Section.defaultProps = {
    className: '',
    heading: testText,
    copy: testText,
};
function Section({ className, heading, copy }) {
    return (
        <section className={className}>
            <h2>{heading}</h2>
            {copy.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </section>
    );
}

CopySection.propTypes = { className: string.isRequired };
function CopySection({ className }) {
    const heading = faker.lorem.words();
    const copy = faker.lorem.paragraphs().split('\n');

    return (
        <FixtureLayout>
            <section className={styles.columns}>
                <Section
                    {...{
                        className,
                        heading,
                        copy,
                    }}
                />
                <Section
                    {...{
                        className: `${className} ${styles.verticalRhythm}`,
                        heading,
                        copy,
                    }}
                />
                <Section
                    {...{
                        className: `${className} ${styles.verticalRhythm}`,
                        heading: `${heading} ${heading}`,
                        copy,
                    }}
                />
            </section>
        </FixtureLayout>
    );
}
