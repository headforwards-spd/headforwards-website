import { string }    from 'prop-types';
import React    from 'react';
import Markdown from '../../page-components/markdown'

import styles from './introduction.module.scss';

export default IntroductionComponent;

IntroductionComponent.propTypes = {
    introduction: string.isRequired,
};

function IntroductionComponent({ introduction }) {
    return introduction ? (
        <section className={styles.introduction}>
            <Markdown source={introduction} />
        </section>
    ) : null;
}
