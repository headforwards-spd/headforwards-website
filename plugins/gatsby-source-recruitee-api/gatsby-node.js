const moment = require('moment');
const TurndownService = require('turndown');
const fetch = require('node-fetch');
const { minify } = require('html-minifier');

const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeTagWhitespace: true,
    removeEmptyElements: true,
};

const turndownService = new TurndownService();
const getMarkdown = html => {
    const minifiedHtml = minify(html, minifyOptions);
    const markdown = turndownService.turndown(minifiedHtml);
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
        // eslint-disable-next-line no-unused-vars
        const [x = null, subtitle = null] = description ? getMarkdown(description).match(/^(.*)(?:\n\n)/m) : [];

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
