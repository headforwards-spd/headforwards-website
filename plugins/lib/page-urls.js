exports.getUrls = pages => {
    const urls = {};

    pages.forEach(page => {
        const { fields, frontmatter } = page || {};
        const { uuid } = frontmatter || {};
        const { slug } = fields;
        if (!uuid || !slug) {
            return;
        }

        urls[uuid] = slug;
    });

    return urls;
};

exports.getUrl = (urls, link) => {
    const { [link]: url = null } = urls || {};

    return url;
};
