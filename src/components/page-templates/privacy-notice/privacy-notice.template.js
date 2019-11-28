import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './privacy-notice.module.scss';

const privacyNoticePropTypes = {
    introduction: string,
    privacyData: {},
};

export default PrivacyNoticeTemplate;

PrivacyNoticeTemplate.propTypes = privacyNoticePropTypes;

PrivacyNoticeTemplate.defaultProps = {
    introduction: null,
    privacyData: {},
};

function PrivacyNoticeTemplate({ privacyData }) {
    const { introduction, sections } = privacyData || {};
    return (
        <>
            <section className={styles.privacySection}>
                <ReactMarkdown source={introduction} />
                {sections.map(({ id, ...section }) => (
                    <section>
                        <h1>{section.title}</h1>
                        <ReactMarkdown source={section.text} />
                    </section>
                ))}
            </section>
        </>
    );
}
