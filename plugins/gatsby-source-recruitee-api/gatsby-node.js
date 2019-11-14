const moment = require('moment');
const TurndownService = require('turndown');
const fetch = require('node-fetch');

const turndownService = new TurndownService();
const getMarkdown = html => turndownService.turndown(html);

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
        const { id, description, requirements, created_at: created, ...others } = offer;

        const nodeId = createNodeId(`recruitee-offer-${id}`);
        const nodeData = {
            ...others,
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
            created: moment(created).toDate(),
        };
        createNode(nodeData);
    }
};
