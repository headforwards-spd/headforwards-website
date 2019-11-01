const uuid = require('uuid');
const { getUrl, getUrls } = require('../lib/page-urls');

exports.sourceNodes = gatsby => {
    const { getNodes } = gatsby;
    const nodes = getNodes();

    const pages = nodes.filter(({ internal = {} }) => {
        const { type = '' } = internal;
        return type === 'MarkdownRemark';
    });

    const urls = getUrls(pages);

    pages.forEach(page => {
        const { frontmatter } = page || {};
        const { components = [] } = frontmatter || {};

        if (components && components.length) {
            components.forEach(component => {
                const { link = '', articles = [] } = component;
                component.id = uuid.v1();

                !!link && (component.link = getUrl(urls, link) || link);

                articles.forEach(article => {
                    const { link: childLink = '' } = article || {};

                    article.id = uuid.v1();

                    !!childLink && (article.link = getUrl(urls, childLink) || childLink);
                });
            });

            page.frontmatter.components = [...components];
        }
    });
};
