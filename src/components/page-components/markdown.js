import { bool, number, string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default Markdown;

Markdown.propTypes = {
    source: string,
    truncate: bool,
    maxLength: number,
};
Markdown.defaultProps = {
    source: null,
    truncate: false,
    maxLength: 150,
};
function Markdown({ source, truncate, maxLength }) {
    const text = truncate ? truncateString(source, maxLength) : source.trim();

    const fancyText = text.replace(/ ([^ ]*)$/gm, '\xa0$1');
    if (!fancyText) {
        return null;
    }

    return !truncate ? <ReactMarkdown source={fancyText} /> : <p>{fancyText}</p>;
}

function truncateString(string = '', maxLength = 150, ellipsis = `\u2026`) {
    // `\u2026`) {

    if (string.length <= maxLength) {
        return string;
    }
    const truncatedString = string
        .replace(/\n/gm, ' ')
        .replace(/\s+/gm, ' ')
        .trim()
        .substr(0, string.lastIndexOf(' ', maxLength));

    return `${truncatedString}${ellipsis}`.replace(/\s*[–.,:;].$/gm, ellipsis);
}
