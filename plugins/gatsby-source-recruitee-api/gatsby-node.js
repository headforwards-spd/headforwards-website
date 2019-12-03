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
    return markdown;
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
        const { id, description, requirements, created_at: created, slug: path, ...others } = offer;

        const nodeId = createNodeId(`recruitee-offer-${id}`);
        const nodeData = {
            ...others,
            path,
            id: nodeId,
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
