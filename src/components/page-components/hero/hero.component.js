import { any, arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import ContentComponent from '../content.component';
import styles from './hero.module.scss';

const heroPropTypes = {
    title: string,
    content: arrayOf(any),
    isTwoColumns: bool,
    className: string,
    isIntro: bool,
};

export default Hero;
export const HeroPropType = shape(heroPropTypes);

Hero.propTypes = heroPropTypes;
Hero.defaultProps = {
    title: null,
    content: [],
    isTwoColumns: false,
    className: '',
    isIntro: false,
};

function Hero({ title, content = [], isTwoColumns, className, isIntro }) {
    const columnsClass = isTwoColumns ? styles.isTwoColumns : '';
    const hasTitleClass = title ? styles.hasTitle : '';
    const isIntroClass = isIntro && !isTwoColumns ? styles.isIntro : '';

    if (!title && !content.length) {
        return null;
    }

    return (
        <section className={`${styles.hero} ${columnsClass} ${hasTitleClass} ${className} ${isIntroClass}`}>
            {title && <h2>{title}</h2>}
            {content && (
                <section className={styles.markdown}>
                    {content.map(({ id, ...item }) => (
                        <ContentComponent key={id} {...item} />
                    ))}
                </section>
            )}
        </section>
    );
}
