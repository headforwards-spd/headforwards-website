import { string } from 'prop-types';
import React from 'react';

import Markdown from '../../page-components/markdown';
import styles from './introduction.module.scss';

export default IntroductionComponent;

IntroductionComponent.propTypes = {
    introduction: string.isRequired,
    className: string,
};

IntroductionComponent.defaultProps = {
    className: '',
};

function IntroductionComponent({ introduction, className }) {
    return introduction ? (
        <section className={`${styles.introduction} ${className}`}>
            <Markdown source={introduction} />
        </section>
    ) : null;
}
