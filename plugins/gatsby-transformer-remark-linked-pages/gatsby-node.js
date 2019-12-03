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
        const { components = [], jobRoles = [] } = frontmatter || {};

        if (components && components.length) {
            components.forEach(component => {
                const { link = null, articles = [] } = component;

                component.id = uuid.v1();
                component.link = getPageLink(link);
                component.page___NODE = getPageId(link);

                articles.forEach(article => {
                    const { link: childLink = null } = article || {};

                    article.id = uuid.v1();
                    article.link = getPageLink(childLink);
                    article.page___NODE = getPageId(childLink);
                });
            });

            page.frontmatter.components = [...components];
        }

        if (jobRoles && jobRoles.length) {
            jobRoles.forEach(jobRole => {
                const { link = null } = jobRole;

                jobRole.id = uuid.v1();
                jobRole.link = getPageLink(link);
                jobRole.page___NODE = getPageId(link);
            });

            page.frontmatter.jobRoles = [...jobRoles];
        }
    });

    function getPageLink(link) {
        if (!link) {
            return null;
        }

        const [linkObject] = typeof link === 'object' ? link : [];
        const { link: linkObjectLink } = linkObject || {};
        const pageLink = linkObjectLink || link;
        const { path } = getIndexedPage(indexedPages, pageLink) || {};

        return typeof link === 'string' ? path : { ...linkObject, link: path };
    }

    function getPageId(link) {
        const { id } = getIndexedPage(indexedPages, link) || {};

        return id || null;
    }
};
