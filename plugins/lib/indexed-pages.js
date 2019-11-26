exports.getIndexedPages = pages => {
    const urls = {};

    pages.forEach(page => {
        const { id, fields, frontmatter } = page || {};
        const { uuid, title, parent = '', seo } = frontmatter || {};
        const { slug: pageSlug = null } = fields;
        const { slug: seoSlug = null } = seo || {};
        const slug = seoSlug || pageSlug;

        if (!uuid || !slug) {
            return;
        }

        !parent && console.log(title, parent, slug);

        urls[uuid] = {
            id,
            path: `${parent}/${slug}`,
        };
    });

    return urls;
};

exports.getIndexedPage = (indexedPages, link) => {
    const { [link]: page } = indexedPages || {};

    return page;
};
