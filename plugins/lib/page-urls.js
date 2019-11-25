exports.getUrls = pages => {
    const urls = {};

    pages.forEach(page => {
        const { fields, frontmatter } = page || {};
        const { uuid, parent = '', seo } = frontmatter || {};
        const { slug: pageSlug=null } = fields;
        const { slug: seoSlug=null } = seo || {};
        const slug = seoSlug || pageSlug;

        if (!uuid || !slug) {
            return;
        }

        urls[uuid] = `${parent}/${slug}`;
    });

    return urls;
};

exports.getUrl = (urls, link) => {
    const { [link]: url = null } = urls || {};

    return url;
};
