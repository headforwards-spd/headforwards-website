const uuid = require('uuid');
const { getIndexedPages, getIndexedPage } = require('../lib/indexed-pages');

exports.onCreateNode = ({ node, getNodes }) => {
    if (node.internal.type !== `DataYaml`) {
        return node;
    }

    const nodes = getNodes() || [];
    const pages = nodes.filter(({ internal = {} }) => {
        const { type = '' } = internal;
        return type === 'MarkdownRemark';
    });

    const indexedPages = getIndexedPages(pages);

    const { menu = [] } = node;

    !!menu.length && (node.menu = menu.map(transformChildren));

    return node;

    function transformChildren(item) {
        const { link = '', children } = item;
        const { id = null, path = link } = getIndexedPage(indexedPages, link) || {};

        item.id = uuid.v1();
        item.page___NODE = id;
        item.link = path;
        !!children && (item.children = children.map(transformChildren));

        return item;
    }
};
