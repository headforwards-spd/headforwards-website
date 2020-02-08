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

    node.menu = menu.length ? menu.map(transformChildren) : node.menu;

    return node;

    function transformChildren(item) {
        const { link = '', children } = item;
        const { id = null, path = link } = getIndexedPage(indexedPages, link) || {};

        item.id = uuid.v1();
        item.page___NODE = id;
        item.uuid = link;
        item.link = path;
        item.children = children ? children.map(transformChildren) : children;

        return item;
    }
};
