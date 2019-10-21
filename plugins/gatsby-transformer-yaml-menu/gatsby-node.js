const { getUrl, getUrls } = require('../lib/page-urls');

exports.onCreateNode = ({ node, getNodes, actions }) => {

    if (node.internal.type !== `DataYaml`) {
        return node;
    }

    const nodes = getNodes() || [];
    const pages = nodes.filter(({ internal = {} }) => {
        const { type = '' } = internal;
        return type === 'MarkdownRemark';
    });

    const urls = getUrls(pages);

    const {menu=[]} = node;

    !!menu.length && (node.menu = menu.map(transformChildren));

    return node;

    function transformChildren(item) {

        const {link, children} = item;

        !!link     && (item.link     = getUrl(urls, link) || link);
        !!children && (item.children = children.map(transformChildren));

        return item;
    }
};

