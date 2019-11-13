import { withKnobs } from '@storybook/addon-knobs';
import React, {Fragment} from 'react';

import styles from './layout.stories.modules.scss';

const faker = require('faker');

export default {
    title: 'Page Layout/Typography',
    decorators: [withKnobs],
};

export const Headings = () => {

    const title = faker.lorem.words();

    return (<section className={styles.wrapper}>
        <h1 className={styles.xxxlarge}>XXXLarge: {title}</h1>
        <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
        <h1 className={styles.xlarge}>XLarge: {title}</h1>
        <h1 className={styles.large}>Large: {title}</h1>
        <h1 className={styles.medium}>Medium: {title}</h1>
        <h1 className={styles.small}>Small: {title}</h1>
    </section>);
};

export const Paragraphs = () => {

    const copy = faker.lorem.paragraph();

    return (<section className={styles.wrapper}>
        <p className={styles.xxlarge}>XXLarge: {copy}</p>
        <p className={styles.xlarge}>XLarge: {copy}</p>
        <p className={styles.large}>Large: {copy}</p>
        <p className={styles.medium}>Medium: {copy}</p>
        <p className={styles.small}>Small: {copy}</p>
    </section>);
};

export const SmallCopy = () => {

    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <Fragment>
            <section className={styles.wrapper}>
                <h1 className={styles.small}>Small: {title}</h1>
                {paragraphs.map(copy => <p className={styles.small}>{copy}</p>)}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.medium}>Medium: {title}</h1>
                {paragraphs.map(copy => <p className={styles.small}>{copy}</p>)}
            </section>
        </Fragment>);
};

export const MediumCopy = () => {

    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <Fragment>
            <section className={styles.wrapper}>
                <h1 className={styles.medium}>Medium: {title}</h1>
                {paragraphs.map(copy => <p className={styles.medium}>{copy}</p>)}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.large}>Large: {title}</h1>
                {paragraphs.map(copy => <p className={styles.medium}>{copy}</p>)}
            </section>
        </Fragment>);
};

export const LargeCopy = () => {

    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <Fragment>
            <section className={styles.wrapper}>
                <h1 className={styles.large}>Large: {title}</h1>
                {paragraphs.map(copy => <p className={styles.large}>{copy}</p>)}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xlarge}>XLarge: {title}</h1>
                {paragraphs.map(copy => <p className={styles.large}>{copy}</p>)}
            </section>
        </Fragment>);
};

export const XLargeCopy = () => {

    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <Fragment>
            <section className={styles.wrapper}>
                <h1 className={styles.xlarge}>XLarge: {title}</h1>
                {paragraphs.map(copy => <p className={styles.xlarge}>{copy}</p>)}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
                {paragraphs.map(copy => <p className={styles.xlarge}>{copy}</p>)}
            </section>
        </Fragment>);
};

export const XXLargeCopy = () => {

    const title = faker.lorem.words();
    const paragraphs = faker.lorem.paragraphs().split('\n');

    return (
        <Fragment>
            <section className={styles.wrapper}>
                <h1 className={styles.xxlarge}>XXLarge: {title}</h1>
                {paragraphs.map(copy => <p className={styles.xxlarge}>{copy}</p>)}
            </section>
            <section className={styles.wrapper}>
                <h1 className={styles.xxxlarge}>XXXLarge: {title}</h1>
                {paragraphs.map(copy => <p className={styles.xxlarge}>{copy}</p>)}
            </section>
        </Fragment>);
};
