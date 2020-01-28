import { string } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default Markdown;

Markdown.propTypes = {
    source: string,
};
Markdown.defaultProps = {
    source: null,
};
function Markdown({ source }) {
    const noOrphansSource = source.trim().replace(/ ([^ ]*)$/gm, '\xa0$1');

    return noOrphansSource ? <ReactMarkdown source={noOrphansSource} /> : null;
}
