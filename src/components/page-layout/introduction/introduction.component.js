import { string } from 'prop-types';
import React from 'react';

import Markdown from '../markdown';
import styles from './introduction.module.scss';

export default Introduction;

Introduction.propTypes = {
    introduction: string.isRequired,
    className: string,
};

Introduction.defaultProps = {
    className: '',
};

function Introduction({ introduction, className }) {
    return introduction ? (
        <section className={`${styles.introduction} ${className}`}>
            <Markdown source={introduction} />
        </section>
    ) : null;
}
