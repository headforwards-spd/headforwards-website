const uuid = require('uuid');
const { getIndexedPages, getIndexedPage } = require('../lib/indexed-pages');

exports.sourceNodes = gatsby => {
    const { getNodes } = gatsby;
    const nodes = getNodes();

    const pages = nodes.filter(({ internal = {} }) => {
        const { type = '' } = internal;
        return type === 'MarkdownRemark';
    });

    const indexedPages = getIndexedPages(pages);

    pages.forEach(page => {
        const { frontmatter } = page || {};
        const { components = [] } = frontmatter || {};

        if (components && components.length) {
            components.forEach(component => {
                const { link = '', articles = [] } = component;
                const { path = link } = getIndexedPage(indexedPages, link) || {};

                component.id = uuid.v1();
                component.link = path;

                articles.forEach(article => {
                    const { link: childLink = '' } = article || {};
                    const { path: childPath = link } = getIndexedPage(indexedPages, childLink) || {};

                    article.id = uuid.v1();
                    article.link = childPath;
                });
            });

            page.frontmatter.components = [...components];
        }
    });
};
