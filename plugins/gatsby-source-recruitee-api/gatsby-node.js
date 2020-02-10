const moment = require('moment');
const TurndownService = require('turndown');
const fetch = require('node-fetch');
const { minify } = require('html-minifier');
const sanitizeHtml = require('sanitize-html');
const pretty = require('pretty');

const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeTagWhitespace: true,
    removeEmptyElements: true,
};

const turndownService = new TurndownService();
const getMarkdown = html => {
    const minifiedHtml = minify(html, minifyOptions)
        .replace('\n', '')
        .replace(/\s*<br>\s*/gm, '')
        .replace(/>\s*/gm, '>')
        .replace(/\s*</gm, '<')
        .replace('<b>', '<strong>')
        .replace('</b>', '</strong>')
        .replace('<i>', '<em>')
        .replace('</i>', '</em>')
        .replace(/\s*<strong>\s*<strong>\s*/gm, '<strong>')
        .replace(/\s*<\/strong>\s*<\/strong>\s*/gm, '</strong>')
        .replace(/\s*<strong>\s*<em>\s*/gm, '<strong><em>')
        .replace(/\s*<\/em>\s*<\/strong>\s*/gm, '</em></strong>')
        .replace(/\s*<em>\s*<\/em>\s*/gm, '')
        .replace(/\s*<strong>\s*<\/strong>\s*/gm, '')
        .replace(/\s*<p>\s*<\/p>\s*/gm, '')
        .replace(/\s*<li>\s*<p>\s*/gm, '<li>')
        .replace(/\s*<\/p>\s*<\/li>\s*/gm, '</li>');

    const sanitizedHtml = sanitizeHtml(minifiedHtml);
    const prettyHtml = pretty(sanitizedHtml, { ocd: true });
    const markdown = turndownService.turndown(prettyHtml);

    return markdown.replace(/\s*(?:\\n){2,}\s*(?:\\n){2,}\s*/g, '\n\n');
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const apiUrl = `https://headforwards.recruitee.com/api/offers`;
    return (
        // Fetch a response from the apiUrl
        fetch(apiUrl)
            .then(response => response.json())
            .then(({ offers }) => offers.map(processOffer))
    );

    function processOffer(offer) {
        const { id, title, description = '', requirements, created_at: created, slug: path, ...others } = offer;
        const [full, salary = null] =
            title.match(
                /(?:\s*-?\s*)(?:\s*\(?\s*)((?:(?:up\s*to)|(?:£?[\d]+\s*-))\s*£?[\d]+)(?:[k]?)(?:\s*\)?\s*)$/im
            ) || [];
        const [, subtitle = null] = description ? getMarkdown(description).match(/^(.*)(?:\n\n)/m) : [];

        const nodeId = createNodeId(`recruitee-offer-${id}`);
        const nodeData = {
            ...others,
            path,
            id: nodeId,
            title: full ? title.substring(0, title.indexOf(full)) : title,
            salary: salary ? `${salary.toLowerCase()}k` : salary,
            subtitle: subtitle.trim().replace(/\*+/g, ''),
            type: 'recruitee-offer',
            parent: null,
            children: [],
            internal: {
                type: `RecruiteeOffer`,
                contentDigest: createContentDigest(offer),
            },
            description: getMarkdown(description),
            requirements: getMarkdown(requirements),
            created: moment(created, 'YYYY-MM-DD HH:mm:ss Z').toDate(),
        };

        createNode(nodeData);
    }
};
