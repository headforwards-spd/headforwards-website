const uuid = require('uuid');
const { getIndexedPages, getIndexedPage } = require('../lib/indexed-pages');

const setItemIds = items =>
    items &&
    items.length &&
    items.forEach(item => {
        item.id = uuid.v1();
        const { components, sections, content, articles } = item;

        components && components.length && setItemIds(components);
        sections && sections.length && setItemIds(sections);
        content && content.length && setItemIds(content);
        articles && articles.length && setItemIds(articles);
    });

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
        const { author, sections = [], components = [], jobRoles = [], footerLinks = [] } = frontmatter || {};

        author && (frontmatter.author___NODE = getPageId(author));
        frontmatter.author = undefined;

        sections && sections.length && setItemIds(sections);
        components && components.length && setItemIds(components);
        jobRoles && jobRoles.length && setItemIds(jobRoles);

        if (components && components.length) {
            components.forEach(component => {
                const { link = null, articles = [] } = component;

                component.link = getPageLink(link);
                component.page___NODE = getPageId(link);

                articles.forEach(article => {
                    const { link: childLink = null } = article || {};

                    article.link = getPageLink(childLink);
                    article.page___NODE = getPageId(childLink);
                });
            });

            page.frontmatter.components = [...components];
        }

        if (jobRoles && jobRoles.length) {
            jobRoles.forEach(jobRole => {
                const { link = null } = jobRole;

                jobRole.link = getPageLink(link);
                jobRole.page___NODE = getPageId(link);
            });

            page.frontmatter.jobRoles = [...jobRoles];
        }

        if (footerLinks && footerLinks.length) {
            footerLinks.forEach(footerLink => {
                const { link1 = null, link2 = null, link3 = null } = footerLink;

                footerLink.id = uuid.v1();
                footerLink.link1 = getPageLink(link1);
                footerLink.link2 = getPageLink(link2);
                footerLink.link3 = getPageLink(link3);
                footerLink.page1___NODE = getPageId(link1);
                footerLink.page2___NODE = getPageId(link2);
                footerLink.page3___NODE = getPageId(link3);
            });

            page.frontmatter.footerLinks = [...footerLinks];
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
