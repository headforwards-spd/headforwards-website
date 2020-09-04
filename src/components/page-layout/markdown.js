import { bool, number, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import preventOrphans from '../../lib/prevent-orphans';
import styles from './markdown.module.scss';

export default Markdown;

Markdown.propTypes = {
    source: string,
    truncate: bool,
    maxLength: number,
    className: string,
};
Markdown.defaultProps = {
    source: null,
    truncate: false,
    maxLength: 125,
    className: '',
};

function Markdown({ source = '', className, truncate, maxLength }) {
    const text = truncate ? truncateString(source, maxLength) : source;

    const fancyText = text ? preventOrphans(text) : '';
    if (!fancyText) {
        return null;
    }

    return !truncate ? (
        <ReactMarkdown source={fancyText} className={`${styles.markdown} ${className}`} />
    ) : (
        <p className={className}>{fancyText}</p>
    );
}

export function truncateString(text = '', maxLength = 150, ellipsis = `\u2026`) {
    if (!text || text.length <= maxLength) {
        return text;
    }

    const truncatedString = text
        .replace(/\n/gm, ' ')
        .replace(/\s+/gm, ' ')
        .trim()
        .substr(0, text.lastIndexOf(' ', maxLength));

    return `${truncatedString}${ellipsis}`.replace(/\s*[–.,:;].$/gm, ellipsis);
}
