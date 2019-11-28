import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import styles from './layout.stories.modules.scss';

const faker = require('faker');

export default {
    title: 'Page Layout/Typography',
    decorators: [withKnobs],
};

export const Colours = () => {

    return <dl className={styles.colours}>
        <dt className={styles.orange1}></dt><dd>Orange 1 (#ffb900)</dd>
        <dt className={styles.orange2}></dt><dd>Orange 2 (#ffcc55)</dd>
        <dt className={styles.blue1}></dt><dd>Blue 1 (#141122)</dd>
        <dt className={styles.blue2}></dt><dd>Blue 2 (#1D1F32)</dd>
        <dt className={styles.grey1}></dt><dd>Grey 1 (#383F51)</dd>
        <dt className={styles.grey2}></dt><dd>Grey 2 (#4A4A4A)</dd>
        <dt className={styles.grey3}></dt><dd>Grey 3 (#4D4D4D)</dd>
        <dt className={styles.grey4}></dt><dd>Grey 4 (#6E7087)</dd>
        <dt className={styles.grey5}></dt><dd>Grey 5 (#b4b4b5)</dd>
        <dt className={styles.grey6}></dt><dd>Grey 6 (#B8B8B8)</dd>
        <dt className={styles.grey7}></dt><dd>Grey 7 (#c3c3c3)</dd>
        <dt className={styles.grey8}></dt><dd>Grey 8 (#d7d7d6)</dd>
        <dt className={styles.grey9}></dt><dd>Grey 9 (#D8D8D8)</dd>
        <dt className={styles.grey10}></dt><dd>Grey 10 (#eeeeee)</dd>
    </dl>
};

export const Headings = () => {
    const title = faker.lorem.words();

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.xxxlarge}>XXXLarge: {title}</h1>
            <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
            <h1 className={styles.xlarge}>XLarge: {title}</h1>
            <h1 className={styles.large}>Large: {title}</h1>
            <h1 className={styles.medium}>Medium: {title}</h1>
            <h1 className={styles.small}>Small: {title}</h1>
        </section>
    );
};

export const Paragraphs = () => {
    const copy = faker.lorem.paragraph();

    return (
        <section className={styles.wrapper}>
            <p className={styles.xxlarge}>XXLarge: {copy}</p>
            <p className={styles.xlarge}>XLarge: {copy}</p>
            <p className={styles.large}>Large: {copy}</p>
            <p className={styles.medium}>Medium: {copy}</p>
            <p className={styles.small}>Small: {copy}</p>
        </section>
    );
};

export const SmallCopy = () => {
    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.small}>Small: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.small}>{copy}</p>
                ))}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.medium}>Medium: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.small}>{copy}</p>
                ))}
            </section>
        </>
    );
};

export const MediumCopy = () => {
    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.medium}>Medium: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.medium}>{copy}</p>
                ))}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.large}>Large: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.medium}>{copy}</p>
                ))}
            </section>
        </>
    );
};

export const LargeCopy = () => {
    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.large}>Large: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.large}>{copy}</p>
                ))}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xlarge}>XLarge: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.large}>{copy}</p>
                ))}
            </section>
        </>
    );
};

export const XLargeCopy = () => {
    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.xlarge}>XLarge: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.xlarge}>{copy}</p>
                ))}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.xlarge}>{copy}</p>
                ))}
            </section>
        </>
    );
};

export const XXLargeCopy = () => {
    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.xxlarge}>{copy}</p>
                ))}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xxxlarge}>XXXLarge: {title}</h1>
                {paragraphs.map(copy => (
                    <p className={styles.xxlarge}>{copy}</p>
                ))}
            </section>
        </>
    );
};
